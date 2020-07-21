const express = require('express');
const router = express.Router();

const {
    createTask,
    deleteTask,
    editAdmin,
    editUser,
    getAllTask,
} = require('./controller');
const { verifyToken } = require('../../helpers');

router.post('/', verifyToken, createTask);
router.delete('/:id', verifyToken, deleteTask);
router.put('/editUser/:id', verifyToken, editUser);
router.put('/editAdmin/:id', verifyToken, editAdmin);
router.get('/all', verifyToken, getAllTask);

module.exports = router;
