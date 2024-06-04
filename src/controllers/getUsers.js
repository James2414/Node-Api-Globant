const express = require('express');
const { getUsers } = require('../db/users');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    }catch (eror) {
        console.error(eror);
        return res.setStatus(400);
    }
}