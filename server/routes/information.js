const express = require('express')
const router = express.Router()

const inforController = require('../controllers/infor.controller')

router.get('/:id', inforController.getInfor)
router.put('/update/:id', inforController.putInfor)

module.exports = router;