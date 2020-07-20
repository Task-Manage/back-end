const express = require('express');
const router = express.Router();

const { createTask } = require('./controller');

router.post('/:id', createTask);

module.exports = router;
