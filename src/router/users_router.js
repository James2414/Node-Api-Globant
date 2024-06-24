const express = require('express');
const { getAllUsers } = require('../controllers/get_all_users');
const { getUser } = require('../controllers/get_user_id');
// const { isAuthenticated } = require('../Middleware/index')

module.exports = function (router) {
    router.get('/api/users', getAllUsers);
    router.get('/api/user/:id', getUser);
}

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Return all users
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Return a user
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the user ID
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */


