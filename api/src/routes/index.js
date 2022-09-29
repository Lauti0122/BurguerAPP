let express = require('express');
const { Router } = require('express');
const router = Router();

const burger = require('./burger');

module.exports = router;

router.use(express.json());
router.use('/burger', burger);

