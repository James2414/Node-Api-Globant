const express = require('express');
const { register, login } = require('../controllers/authentication_user');

module.exports = function(router) {
    router.post('/api/register', register);
    router.post('/api/login', login);
};


/** 
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        password:
 *          type: string
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: "alan@gmail.com"
 *        password: "jaja"
 */

/** 
 * @swagger
 * /api/register:
 *   post:
 *     summary: Create new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: New user created
 */

