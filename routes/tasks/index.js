const express = require('express');
const router = express.Router();

const { createTask } = require('./controller');
const { verifyToken } = require('../../helpers');

router.post('/', verifyToken, createTask);

module.exports = router;
