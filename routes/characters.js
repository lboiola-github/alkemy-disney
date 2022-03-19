const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/characters')

router.get('/detail', charactersController.detail)

module.exports = router;