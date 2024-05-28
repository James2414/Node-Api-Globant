
const { request } = require('http');
const usersTest = require('../controllers/getUsers');
const supertest = require('supertest'); 

describe('GET /users', () => {
    test('deberia responder con 400', async() =>{
        await request(usersTest).get('')
    })
})

