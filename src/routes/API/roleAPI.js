const express = require('express');
const router = express.Router();
const roleController = require('../../controllers/RoleController');

router.post('/add', roleController.addRole);

module.exports = router;