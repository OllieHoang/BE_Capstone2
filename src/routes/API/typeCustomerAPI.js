const express = require('express');
const TypeCustomerController = require('../../controllers/TypeCustomerController');
const router = express.Router();

router.post('/updatetyprcustomer', TypeCustomerController.ChangeTypeCustomer);
router.post('/user-type', TypeCustomerController.UserType);

module.exports = router;