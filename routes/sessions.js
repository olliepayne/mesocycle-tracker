const express = require('express');
const router = express.Router();

const sessionCtrl = require('../controllers/sessions')

router.get('/mesocycles/:mid/sessions', sessionCtrl.index)
router.get('/mesocycles/:mid/sessions/:sid', sessionCtrl.show)
router.get('/mesocycles/:mid/sessions', sessionCtrl.new)
router.post('/mesocycles/:mid/sessions', sessionCtrl.create)

module.exports = router