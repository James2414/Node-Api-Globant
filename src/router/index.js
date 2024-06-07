const express = require('express');
const authentication = require('./authentication');
const users = require('./usersRouter');
const userDelete = require('./deleteUser');
const rooms = require('./spaceRouter/router');
const user = require('./usersRouter');
const userUpdate = require('./updateUser');

// .- Routes for endpoint management
const router = express.Router();
module.exports = () => {
    authentication(router);
    users(router);
    userDelete(router);
    rooms(router);
    user(router);
    userUpdate(router);
    return router;
};