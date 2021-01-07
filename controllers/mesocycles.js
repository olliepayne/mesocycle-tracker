const User = require('../models/user');
const Mesocycle = require('../models/mesocycle');
const shorthandDate = require('../public/javascripts/shorthand-date')

module.exports = {
  index,
  new: newOne,
  create,
  show,
  delete: deleteOne,
  update
}

function index(req, res) {
  User.findById(req.user._id).
  populate('mesocycles'). 
  exec((err, user) => {
    res.render('mesocycles/index', {
      title: 'Mesocycles',
      user,
      mesocycles: user.mesocycles
    })
  });
}

function newOne(req, res) {
  res.render('mesocycles/new', {
    title: 'New',
    user: req.user
  });
}

function create(req, res) {
  Mesocycle.create(req.body, (err, newMesocycle) => {
    newMesocycle.dateStr = shorthandDate.convert(newMesocycle.startDate)
    newMesocycle.endDateStr = calculateEndDateStr(newMesocycle)
    newMesocycle.save()
    
    User.findById(req.user._id, (err, user) => {
      user.mesocycles.push(newMesocycle);
      user.save((err) => {
        res.redirect('/mesocycles');
      });
    });
  });
}

function show(req, res) {
  User.findById(req.user._id, (err, user) => {
    Mesocycle.findById(req.params.mid, (err, mesocycle) => {
      res.render('mesocycles/show', {
        title: `Mesocycle ${mesocycle._id}`,
        user: req.user,
        mesocycle,
      });
    });
  })
}

function deleteOne(req, res) {
  Mesocycle.findByIdAndDelete(req.params.mid, (err, deletedMeso) => {
    User.findById(req.user._id, (err, user) => {
      const deletedMesoIndex = user.mesocycles.indexOf(deletedMeso);
      user.mesocycles.splice(deletedMesoIndex, 1);

      res.redirect(`/mesocycles`);
    });
  });
}

function update(req, res) {
  Mesocycle.findByIdAndUpdate(req.params.mid, req.body)
  .then(() => {
    Mesocycle.findById(req.params.mid, (err, mesocycle) => {
      mesocycle.endDateStr = calculateEndDateStr(mesocycle)
      mesocycle.save()

      res.redirect(`/mesocycles/${req.params.mid}`);
    })
  });
}

// - - - Helper Functions - - -

function calculateEndDateStr(mesocycle) {
  let endDate = new Date()
  endDate.setDate(mesocycle.startDate.getDate() + mesocycle.length * 7)
  return shorthandDate.convert(endDate)
}