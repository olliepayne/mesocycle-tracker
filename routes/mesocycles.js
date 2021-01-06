const express = require('express');
const router = express.Router();

const mesocycleCtrl = require('../controllers/mesocycles');

router.get('/', isLoggedIn, mesocycleCtrl.index);
router.get('/new', isLoggedIn, mesocycleCtrl.new);
router.post('/', isLoggedIn, mesocycleCtrl.create);
router.get('/:mid', isLoggedIn, mesocycleCtrl.show);
router.delete('/:mid', isLoggedIn, mesocycleCtrl.delete);
router.put('/:mid', isLoggedIn, mesocycleCtrl.update);

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;