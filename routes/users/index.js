const express = require('express');
const router = express.Router();

const { userRegistration } = require('./controller');

router.post('/', userRegistration);

module.exports = router;
