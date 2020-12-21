const express = require('express');
const router = express.Router();

const mesocycleCtrl = require('../controllers/mesocycles');

router.get('/', mesocycleCtrl.index);
router.get('/new', mesocycleCtrl.new);

module.exports = router;