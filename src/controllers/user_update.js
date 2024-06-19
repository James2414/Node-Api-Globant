const express = require('express');
const crypto = require('crypto');
const { updateUser } = require('../Models/users_db');

exports.UserUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }

        // .- Hash the new password using crypto
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

        // .- Create a new user object with the updated password
        const updatedUserData = {
            password: hashedPassword
        };
        // .- Update the user's password in the database
        const updatedUser = await updateUser(id, updatedUserData);

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
         // .- user updated
        return res.status(200).json({ message: 'Password updated successfully', updatedUser });
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};
