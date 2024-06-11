const express = require('express');
const getReactions = require('../routes/getReactionsRouter')

const routes = express.Router();

module.exports = () =>{
    getReactions(routes);
    return routes;
}

