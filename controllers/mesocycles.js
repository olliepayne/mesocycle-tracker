const User = require('../models/user');
const Mesocycle = require('../models/mesocycle');

module.exports = {
  index,
  new: newOne,
  create,
  show
}

function index(req, res) {
  User.findById(req.params.id, (err, result) => {
    res.render('mesocycles/index', {
      title: 'Your Mesocycles', 
      user: req.user,
      // add
    });
  });
}

function newOne(req, res) {
  res.render('mesocycles/new', {
    title: 'New Mesocycle',
    user: req.user
  });
}

function create(req, res) {
  
}

function show(req, res) {
  
}