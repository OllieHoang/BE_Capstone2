const express = require('express');
const router = express.Router();
const inforController = require("../../controllers/InforController")

router.get('/:qrCodeId', inforController.getInformation)

module.exports = router
