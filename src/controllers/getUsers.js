const express = require('express');
const { getUsers } = require('../db/users_db');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await getUsers();
        return res.status(200).json();
    }catch (eror) {
        console.error(eror);
        return res.setStatus(400);
    }
}