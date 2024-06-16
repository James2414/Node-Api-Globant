const express = require('express');
const creteteReaction = require('../reactionsRouter/router')
const getReactions = require('../reactionsRouter/router')
const router = express.Router();

module.exports = () => {
   creteteReaction(router);
   getReactions(router);
   return router;
}
