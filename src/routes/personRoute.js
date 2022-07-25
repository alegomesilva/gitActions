const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')

router.get('/', controller.get);
router.get('/user:id', controller.getById);
router.post('/user', controller.post);
router.put('/user:id', controller.put);
router.delete('/user:id', controller.delete);

module.exports = router;