const express = require('express');
const router = express.Router();

const mesocycleCtrl = require('../controllers/mesocycles');

router.get('/', mesocycleCtrl.index);
router.get('/new', mesocycleCtrl.new);
router.post('/', mesocycleCtrl.create);
router.get('/:mid', mesocycleCtrl.show);
router.delete('/:mid', mesocycleCtrl.delete);
router.put('/:mid', mesocycleCtrl.update);

module.exports = router;