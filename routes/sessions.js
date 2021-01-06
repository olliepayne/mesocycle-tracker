const express = require('express');
const router = express.Router();

const sessionCtrl = require('../controllers/sessions')

router.get('/mesocycles/:mid/sessions', sessionCtrl.index)
router.get('/mesocycles/:mid/sessions/new', sessionCtrl.new)
router.get('/mesocycles/:mid/sessions/:sid', sessionCtrl.show)
router.post('/mesocycles/:mid/sessions', sessionCtrl.create)
router.put('/mesocycles/:mid/sessions/:sid', sessionCtrl.update)
router.delete('/mesocycles/:mid/sessions/:sid', sessionCtrl.delete)

module.exports = router