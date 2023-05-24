const express = require('express')
const router = express.Router()

const cardController = require('../controllers/cards.controller')
const { verifyToken, checkRole } = require('../middlewares/auth')
const { RoleEnum } = require('../utils/enum')

router.get('/', cardController.getAll)
router.get('/is-ordered/:cardId', cardController.checkIsOrdered)
router.get('/search', cardController.searchcard)
router.get('/cardId/:cardId', cardController.getBycardId)
router.get('/slug/:slug', cardController.getBySlug)
router.get('/:id', cardController.getById)
router.post('/', verifyToken, checkRole([RoleEnum.Staff, RoleEnum.Admin]), cardController.create)
router.put('/:id', verifyToken, checkRole([RoleEnum.Staff, RoleEnum.Admin]), cardController.updateById)
router.delete('/:id', verifyToken, checkRole([RoleEnum.Staff, RoleEnum.Admin]), cardController.deleteById)


module.exports = router;
