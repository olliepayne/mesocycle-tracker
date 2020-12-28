const express = require('express');
const { session } = require('passport');
const router = express.Router();

const sessionCtrl = require('../controllers/sessions');

router.get('/', sessionCtrl.index);
router.get('/new', sessionCtrl.new);
router.post('/', sessionCtrl.create);
router.get('/:sid', sessionCtrl.show);

module.exports = router;