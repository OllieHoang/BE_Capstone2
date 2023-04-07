const express = require('express');
const router = express.Router();
const userController = require('../../controllers/UserController');


// router.get('/', userController.getAllUser)

router.post('/register', userController.register);
router.get('/verify', userController.verifyAccount)

router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/profile/:userId', userController.profile)

router.post('/update/:userId', userController.updateUser);
router.post('/password/:userId', userController.changePassword);
router.post('/forgot', userController.forgotPassword);
router.get('/forgot', userController.handlePasswordReset);
router.post('/forgot/:userId', userController.handlePasswordReset);

module.exports = router;
