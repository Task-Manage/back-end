const express = require('express');
const router = express.Router();

const { createTask } = require('./controller');

router.post('/', createTask);

module.exports = router;
