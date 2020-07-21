const express = require('express');
const router = express.Router();


const {
    createTask,
    deleteTask,
    editAdmin,
    editUser,
    getAllTasks,
} = require('./controller');

const { verifyToken } = require('../../helpers');

router.get('/', verifyToken, getAllTasks);
router.post('/', verifyToken, createTask);
router.delete('/:id', verifyToken, deleteTask);
router.put('/editUser/:id', verifyToken, editUser);
router.put('/editAdmin/:id', verifyToken, editAdmin);

module.exports = router;
