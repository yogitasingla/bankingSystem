
const express = require('express');
const router = express.Router();

const WebhookController = require('../controllers/banking-controller');
const webhookController = new WebhookController();

router.post('/register',webhookController.show)
router.post('/login',webhookController.onlogin)
router.post('/depositAmount',webhookController.ondeposit)
router.post('/withdrawAmount',webhookController.onwithdraw)
router.post('/chnagePassword',webhookController.onChangeP)
router.post('/checkBalance',webhookController.onCheck)
router.post('/checkAll',webhookController.onalltransaction)



module.exports = router;