const express = require('express');
const router = express.Router();
const posturaController = require('../controllers/postura');
const alertController = require('../controllers/alert');

router.get('/postura', posturaController.getPostura);
router.post('/postura', posturaController.createPostura);
router.get('/alert', alertController.getAlert);
router.post('/alert', alertController.createAlert);

module.exports = router;
