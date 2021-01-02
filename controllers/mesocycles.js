const Mesocycle = require('../models/mesocycle');

module.exports = {
  index,
  new: newOne,
  create,
  show,
  delete: deleteOne,
  update
}

function index(req, res) {
  Mesocycle.find({}, (err, results) => {
    res.render('mesocycles/index', {
      title: 'Mesocycles',
      user: req.user,
      mesocycles: results
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
  Mesocycle.create(req.body, (err, newResult) => {
    res.redirect('/mesocycles');
  });
}

function show(req, res) {
  
}

function deleteOne(req, res) {
  Mesocycle.findByIdAndDelete(req.params.id, (err) => {
    res.redirect('/mesocycles');
  });
}

function update(req, res) {

}