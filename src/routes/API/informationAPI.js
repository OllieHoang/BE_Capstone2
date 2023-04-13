const express = require('express');
const router = express.Router();
const inforController = require("../../controllers/inforController")

router.get('/:userId', inforController.getInformation)

module.exports = router
