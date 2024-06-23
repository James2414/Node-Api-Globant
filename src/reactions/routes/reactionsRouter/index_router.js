const express = require('express');
const creteteReaction = require('./router');
const getReactions = require('./router');
const deleteReaction = require('./router')
const router = express.Router();

module.exports = () => {
   creteteReaction(router);
   getReactions(router);
   deleteReaction(router);
   return router;
}

