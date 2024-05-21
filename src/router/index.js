const express = require('express');
const authentication = require('./authentication');
const users = require('./usersRouter');
const userDelete = require('./deleteUser');
const rooms = require('./spaceRouter/router');

// .Router para manejo de endpoints
const router = express.Router();
module.exports = () => {
    authentication(router);
    users(router);
    userDelete(router);
    rooms(router);
    return router;
};