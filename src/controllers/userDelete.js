const express = require('express');

const { deleteUserById } = require('../db/users');


exports.UserDelete = async (req, res) => {
    try {
        //extract the request id
    const { id } = req.params
    const deletedUser = await deleteUserById(id);
    return res.json(deletedUser);
    

    } catch (err) {
        return res.sendStatus(400);   
}
}
