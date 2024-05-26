const express = require('express');
const crypto = require('crypto');
const { getUserById, updateUser } = require('../db/users');

exports.UserUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }

        // .-Fetch the user by Id
        const user = await getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Hash the new password using crypto
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

        // Update the user's password in the database
        user.password = hashedPassword;
        const updatedUser = await updateUser(id, user);

        return res.status(200).json({ message: 'Password updated successfully', updatedUser });
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
};
