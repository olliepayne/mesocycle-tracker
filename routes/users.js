var express = require('express');
var router = express.Router();

const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/:id', usersCtrl.show);

module.exports = router;
