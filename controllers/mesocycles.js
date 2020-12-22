const Mesocycle = require('../models/mesocycle');

module.exports = {
  index,
  new: newOne,
  create,
  show
}

function index(req, res) {
  res.render('mesocycles/index', {title: 'All Mesocycles', id: req.body.id});
}

function newOne(req, res) {
  res.render('mesocycles/new', {title: 'New Mesocycle'});
}

function create(req, res) {
  
}

function show(req, res) {
  
}