const express = require('express');
const router = express.Router();

const { registerStaff } = require('../controllers/staffController');

router.route('/staff').post(registerStaff)

module.exports = router;