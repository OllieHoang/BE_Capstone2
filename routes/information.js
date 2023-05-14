const express = require('express')
const router = express.Router()

const inforController = require('../controllers/infor.controller')

router.get('/:id', inforController.getInfor)
router.get('/', inforController.getCreateInfor)
router.post('/create', inforController.createInfor)
router.post('/edit/:id', inforController.postInfor)

module.exports = router;