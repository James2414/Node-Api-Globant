const express = require('express');
const { deleteUserById } = require('../db/users_db');
const { sort } = require('d3');

exports.UserDelete = async (req, res) => {
    try {
        // .- Extract the request id
    const { id } = req.params
    const deletedUser = await deleteUserById(id);
    return res.json(deletedUser);
    } catch (err) {
        return res.sendStatus(400);   
}
}

