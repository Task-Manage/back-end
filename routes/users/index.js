const express = require('express');
const router = express.Router();

const {
    userRegistration,
    getAllUser
} = require('./controller');

router.post('/', userRegistration);
router.get('/getAllUserAdminPage', getAllUser)

module.exports = router;