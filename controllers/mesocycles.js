const User = require('../models/user');
const Mesocycle = require('../models/mesocycle');

module.exports = {
  index,
  new: newOne,
  create,
  show
}

function index(req, res) {
  const userMesocycles = [];
  req.user.mesocycles.forEach((m_id) => {
    userMesocycles.push(Mesocycle.findById(m_id));
  });

  res.render('mesocycles/index', {
    title: 'Your Mesocycles',
    user: req.user,
    mesocycles: userMesocycles
  });
}

function newOne(req, res) {
  res.render('mesocycles/new', {
    title: 'New Mesocycle',
    user: req.user
  });
}

function create(req, res) {
  const newMesocycle = new Mesocycle(req.body);
  newMesocycle.save();
  req.user.mesocycles.push(newMesocycle);
  req.user.save();

  res.redirect('/users/:uid/mesocycles');
}

function show(req, res) {
  
}