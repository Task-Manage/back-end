const express = require('express');
const router = express.Router();

const { createTask, deleteTask, getAllTasks } = require('./controller');
const { verifyToken } = require('../../helpers');

router.get('/', verifyToken, getAllTasks);
router.post('/', verifyToken, createTask);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;
