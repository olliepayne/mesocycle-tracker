const Mesocycle = require('../models/mesocycle')
const Session = require('../models/session')
const shorthandDate = require('../public/javascripts/shorthand-date')

module.exports = {
  index,
  new: newOne,
  create,
  show,
  update,
  delete: deleteOne
}

function index(req, res) {
  Mesocycle.findById(req.params.mid)
  .populate('sessions')
  .exec((err, mesocycle) => {
    res.render('sessions/index', {
      title: 'Sessions',
      user: req.user,
      mesocycle
    })
  })
}

function newOne(req, res) {
  res.render('sessions/new', {
    title: 'New Session',
    user: req.user,
    params: req.params
  })
}

function create(req, res) {
  Session.create(req.body, (err, newSession) => {
    newSession.dateStr = shorthandDate.convert(newSession.date)
    newSession.save()

    Mesocycle.findById(req.params.mid, (err, mesocycle) => {
      mesocycle.sessions.push(newSession);
      mesocycle.save();

      res.redirect(`/mesocycles/${req.params.mid}/sessions`);
    })
  })
}

function show(req, res) {
  Session.findById(req.params.sid, (err, session) => {
    res.render('sessions/show', {
      title: 'Details',
      user: req.user,
      params: req.params,
      session
    })
  })
}

function update(req, res) {
  Session.findByIdAndUpdate(req.params.sid, req.body)
  .then(() => {
    res.redirect(`/mesocycles/${req.params.mid}/sessions`);
  })
}

function deleteOne(req, res) {
  Session.findByIdAndDelete(req.params.sid, (err, deletedSession) => {
    Mesocycle.findById(req.params.mid, (err, mesocycle) => {
      const deletedSessionIndex = mesocycle.sessions.indexOf(deletedSession);
      mesocycle.sessions.splice(deletedSessionIndex, 1);

      res.redirect(`/mesocycles/${req.params.mid}/sessions`);
    })
  });
}