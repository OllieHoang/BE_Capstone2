const express = require('express');
const router = express.Router();
const roleController = require('../../controllers/RoleController');

router.post('/add', roleController.addRole);
router.post('/changerole', roleController.changeRole);

module.exports = router;