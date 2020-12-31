const Mesocycle = require('../models/mesocycle');

module.exports = {
  index,
  new: newOne,
  create,
  show
}

function index(req, res) {
  console.log(req.params.mid);
  res.render('sessions/index', {
    title: 'Sessions',
    user: req.user
  });
}

function newOne(req, res) {
  
}

function create(req, res) {

}

function show(req, res) {
  
}