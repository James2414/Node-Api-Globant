const express = require('express');
const { getUsersById } = require('../db/users');

exports.getUser = async (req, res) => {
    try{
        const UserId = req.params.id;
        const user = await getUsersById(UserId);
        if(user){
            return res.status(200).json(user);
        }else{
            return res.status(404).send('user not found');
        }
    }catch(err){
        console.error(err);
        return res.setStatus(400);
    }
}