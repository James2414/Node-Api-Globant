const express = require('express');

const { UserDelete } = require('../controllers/userDelete')

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete a user
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
 *         description: User deleted successfully
 *     content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *     
 *       404:
 *         description: user not found
 */

module.exports = function(router){
    router.delete('/api/user/:id', UserDelete);
}