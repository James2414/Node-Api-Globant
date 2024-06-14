const express = require('express');

const { UserUpdate } = require('../controllers/user_update');

module.exports = function(router){
    router.put('/api/users/:id', UserUpdate);
}