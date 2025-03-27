const express = require('express');
const router = express.Router();
const posturaController = require('../controllers/postura');

router.get('/postura', posturaController.getPostura);
router.post('/postura', posturaController.createPostura);

module.exports = router;
