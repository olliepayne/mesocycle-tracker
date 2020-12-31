const Mesocycle = require('../models/mesocycle');

module.exports = {
  index,
  new: newOne,
  create,
  show
}

function index(req, res) {
  // Mesocycle.findById(req.params.mid). 
  // populate('sessions'). 
  // exec((err, mesocycle) => {
  //   res.render('sessions/index', {
  //     title: '',
  //     user: req.user,
  //     mesocycle
  //   });
  // });
}

function newOne(req, res) {
  
}

function create(req, res) {

}

function show(req, res) {
  
}