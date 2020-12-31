const express = require('express');
const router = express.Router();

const sessionCtrl = require('../controllers/sessions');

router.get('/', sessionCtrl.index);
router.get('/new', sessionCtrl.new);

module.exports = router;