const express = require('express');
const router = express.Router();
const userController = require('../../controllers/UserController');
const roleController = require('../../controllers/RoleController');


router.get('/', userController.getAllUser)

router.post('/register', userController.register);
router.post('/verify', userController.verifyAccount)

router.post('/login', userController.login)
router.post('/logout', userController.logout)

router.post('/update/:userId', userController.updateUser);
router.post('/password/:userId', userController.changePassword);
router.post('/forgot', userController.forgotPassword);
module.exports = router;