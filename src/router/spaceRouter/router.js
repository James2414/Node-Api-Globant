const {createRoom, getRooms} = require('../../controllers/spacesController/spaces');
const {authenticateToken} = require('../../middleware/spacesJwt/authenticateToken');



module.exports = function(router) {
    router.post('/api/room', createRoom);
    router.get('/api/room',authenticateToken, getRooms);
    router.get('/api/room/:id');
    router.put('/api/room/:id');
    router.delete('/api/room/:id');
};
