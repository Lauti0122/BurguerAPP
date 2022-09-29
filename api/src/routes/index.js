let express = require('express');
const { Router } = require('express');
const router = Router();

const burger = require('./burger');
const drinks = require('./drink');
const ingredients = require('./ingredients');
const chips = require('./chips');

module.exports = router;

router.use(express.json());

router.use('/burgers', burger);
router.use('/burgers', drinks);
router.use('/burgers', ingredients);
router.use('/burgers', chips);

