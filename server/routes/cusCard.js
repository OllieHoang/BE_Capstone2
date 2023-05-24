const express = require('express')
const router = express.Router()
const cusCardController = require('../controllers/cusCard.controller')

router.get('/get/:id', cusCardController.getcusCard)
router.post('/post/:id', cusCardController.postcusCard)

module.exports = router