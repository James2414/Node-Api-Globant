const express = require('express');
const { createReaction } = require('../controllers/reactionController');

const router = express.Router();

router.post('/', createReaction);

module.exports = router;
