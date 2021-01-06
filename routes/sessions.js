const express = require('express');
const router = express.Router();

const sessionCtrl = require('../controllers/sessions')

router.get('/mesocycles/:mid/sessions', isLoggedIn, sessionCtrl.index)
router.get('/mesocycles/:mid/sessions/new', isLoggedIn, sessionCtrl.new)
router.post('/mesocycles/:mid/sessions', isLoggedIn, sessionCtrl.create)
router.get('/mesocycles/:mid/sessions/:sid', isLoggedIn, sessionCtrl.show)
router.put('/mesocycles/:mid/sessions/:sid', isLoggedIn, sessionCtrl.update)
router.delete('/mesocycles/:mid/sessions/:sid', isLoggedIn, sessionCtrl.delete)

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router