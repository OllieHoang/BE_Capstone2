const express = require('express');
const router = express.Router();
const userRoleController = require('../../controllers/UserRoleController');

router.post('/add', userRoleController.addUserRole);

module.exports = router;