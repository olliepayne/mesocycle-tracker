const User = require('../models/user');
const Mesocycle = require('../models/mesocycle');

module.exports = {
  index,
  new: newOne,
  create,
  show
}

function index(req, res) {
  Mesocycle.find({}, (err, results) => {
    res.render('mesocycles/index', {
      title: 'Mesocycles',
      user: req.user,
      mesoycles: results
    })
  });
}

function newOne(req, res) {
  
}

function create(req, res) {
  
}

function show(req, res) {
  
}