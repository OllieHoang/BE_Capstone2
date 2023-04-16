const express = require('express');
const router = express.Router();
const qrCodeController = require("../../controllers/qrCodeController")

router.get('/:userId', qrCodeController.getQrinformation)
router.post('/update/:userId', qrCodeController.updateQrCode)

module.exports = router
