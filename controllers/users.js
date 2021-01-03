const User = require('../models/user');

module.exports = {
  index,
  show
}

function index(req, res) {
  res.render('users/index', {
    title: 'Users',
    user: req.user
  });
}

function show(req, res) {
  User.findById(req.user._id).
  populate('mesocycles'). 
  exec((err, user) => {
    let canEdit = false;
    if(req.params.id == req.user._id) {
      canEdit = true;
    }

    res.render('users/show', {
      title: `User ${user._id}`,
      user,
      canEdit
    });
  });
}