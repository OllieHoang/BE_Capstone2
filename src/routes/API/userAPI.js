const express = require('express');
const router = express.Router();
const userController = require('../../controllers/UserController');

router.post('/register', userController.register);
router.get('/', userController.getAllUser)
router.post('/login', userController.login)
router.post('/update/:userId', userController.updateUser);
module.exports = router;