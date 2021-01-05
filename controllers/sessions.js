const Mesocycle = require('../models/mesocycle')
const Session = require('../models/session')

module.exports = {
  index,
  show,
  new: newOne,
  create
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

function show(req, res) {
  
}

function newOne(req, res) {
  res.render('sessions/new', {
    title: 'New Session',
    user: req.user
  })
}

function create(req, res) {

}