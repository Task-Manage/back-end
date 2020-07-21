const express = require('express');
const router = express.Router();

const { createTask, deleteTask } = require('./controller');
const { verifyToken } = require('../../helpers');

router.post('/', verifyToken, createTask);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;
