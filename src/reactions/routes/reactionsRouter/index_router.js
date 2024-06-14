const express = require('express');
const creteteReaction = require('../reactionsRouter/router')
const router = express.Router();

module.exports = () => {
   creteteReaction(router);
   return router;
}
