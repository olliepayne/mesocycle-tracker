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
  User.findById(req.params.id, (err, result) => {
    res.render('users/show', {
      title: 'Test',
      user: req.user,
      userModel: result
    });
  })
}