var express = require('express');
var router = express.Router();

const usersCtrl = require('../controllers/users');

router.get('/', isLoggedIn, usersCtrl.index);
router.get('/:id', isLoggedIn, usersCtrl.show);

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
