const express = require('express');
const { crearReaccion } = require('../controllers/reactionController');

const router = express.Router();

router.post('/', crearReaccion);

module.exports = router;
