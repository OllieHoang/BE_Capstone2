const express = require('express')
const router = express.Router()

const themeController = require('../controllers/theme.controller')


router.get('/get', themeController.getTheme)
router.post('/post', themeController.postTheme)
router.post('/:themeId', themeController.updateTheme)

module.exports = router;
