const express = require('express');
const { session } = require('passport');
const router = express.Router();

const sessionCtrl = require('../controllers/sessions')

router.get('/', sessionCtrl.index)
router.get('/:id', sessionCtrl.show)