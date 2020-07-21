const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    userRegistration,
    userLogin,
    getAllUser,
    getAllTasksofEachUser,
    deleteUser,
} = require('./controller');

router.post('/', userRegistration);
router.get('/getAllUserAdminPage', getAllUser);
router.post('/login', userLogin);
router.get('/:id/tasks', getAllTasksofEachUser);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
