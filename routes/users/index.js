const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    userRegistration,
    userLogin,
    getAllUser,
    getAllTasksofEachUser,
    deleteUser,
    findBySearch,
    findBySearchEachUser,
} = require('./controller');

router.post('/', userRegistration);
router.get('/getAllUserAdminPage', verifyToken, getAllUser);
router.post('/login', userLogin);
router.get('/:id/tasks', verifyToken, getAllTasksofEachUser);
router.delete('/:id', verifyToken, deleteUser);
router.get('/search/', verifyToken, findBySearch);
router.get('/search/:id/', verifyToken, findBySearchEachUser);

module.exports = router;
