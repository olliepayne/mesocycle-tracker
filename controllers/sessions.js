const Mesocycle = require('../models/mesocycle')
const Session = require('../models/session')

module.exports = {
  index,
  show,
  new: newOne,
  create,
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

function newOne(req, res) {
  res.render('sessions/new', {
    title: 'New Session',
    user: req.user,
    params: req.params
  })
}

function create(req, res) {

}

function update(req, res) {

}

function deleteOne(req, res) {

}