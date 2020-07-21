const express = require('express');
const router = express.Router();

const {
    userRegistration,
    userLogin,
    getAllUser,
} = require('./controller');


router.post('/', userRegistration);
router.get('/getAllUserAdminPage', getAllUser);
router.post('/login', userLogin);

module.exports = router;