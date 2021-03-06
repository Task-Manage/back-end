const express = require('express');
const router = express.Router();

const {
    createTask,
    deleteTask,
    editAdmin,
    editUser,
    getAllTasks,
    findBySearch,
} = require('./controller');

const { verifyToken } = require('../../helpers');

router.get('/', verifyToken, getAllTasks);
router.post('/', verifyToken, createTask);
router.delete('/:id', verifyToken, deleteTask);
router.put('/editUser/:id', verifyToken, editUser);
router.put('/editAdmin/:id', verifyToken, editAdmin);
router.get('/search/', verifyToken, findBySearch);

module.exports = router;
