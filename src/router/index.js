const express = require('express');
const authentication = require('./authentication_user_router');
const users = require('./users_router');
// const userDelete = require('./deleteUser');
const rooms = require('./spaceRouter/router');
const user = require('./users_router');
const userUpdate = require('./update_user_router');

// .- Routes for endpoint management
const router = express.Router();
module.exports = () => {
    authentication(router);
    users(router);
    // userDelete(router);
    rooms(router);
    user(router);
    userUpdate(router);
    return router;
};
