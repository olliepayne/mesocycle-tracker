const express = require('express');
const router = express.Router({ mergeParams: true });

const mesocycleCtrl = require('../controllers/mesocycles');

router.get('/', mesocycleCtrl.index);
router.get('/new', mesocycleCtrl.new);
router.post('/', mesocycleCtrl.create);
router.get('/:id', mesocycleCtrl.show);

module.exports = router;