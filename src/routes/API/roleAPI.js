const express = require('express');
const router = express.Router();
const userController = require('../../controllers/RoleController');

router.post('/add', userController.addRole);

module.exports = router;