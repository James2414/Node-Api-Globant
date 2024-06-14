const express = require('express');

const { getReactions } = require('../models/reactions_models');

exports.getAllReactions = async (req, res) => {
    try {
        const reactions = await getReactions()
        return res.status(200).json(reactions);
    }catch(err) {
        console.error(err);
        return res.sendStatus(400);
    }
}