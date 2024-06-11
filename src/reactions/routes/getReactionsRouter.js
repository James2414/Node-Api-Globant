const { getAllReactions } = require('../controllers/getReactions');
const express = require('express');


module.exports = function (routes) {
    routes.get('/api/reactions', getAllReactions); 
}