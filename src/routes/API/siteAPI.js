const router = require('express').Router();
const siteWebController = require('../../controllers/siteController')

router.get('/test', siteWebController.test);
router.post('/register', siteWebController.register);
module.exports = router;