const express = require('express');

const { UserUpdate } = require('../Controllers/user_update');

module.exports = function(router){
    router.put('/api/users/:id', UserUpdate);
}