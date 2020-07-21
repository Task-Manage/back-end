const express = require('express');
const router = express.Router();

const {
    userRegistration,
    userLogin,
    getAllUser,
    getAllTasksofEachUser,
} = require('./controller');

router.post('/', userRegistration);
router.get('/getAllUserAdminPage', getAllUser);
router.post('/login', userLogin);
router.get('/:id/tasks', getAllTasksofEachUser);

module.exports = router;
