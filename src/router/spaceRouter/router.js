const { createRoom, getRooms } = require('../../controllers/spacesController/spaces');
const { deleteRoom } = require('../../controllers/spacesController/spacesDelete');
const { getRoomById } = require('../../controllers/spacesController/spacesID');
const { updateRoom } = require('../../controllers/spacesController/spacesUpdate');



module.exports = function(router) {
    router.post('/api/room', createRoom);
    router.get('/api/room', getRooms);
    router.get('/api/room/:id', getRoomById);
    router.put('/api/room/:id', updateRoom);
    router.delete('/api/room/:id', deleteRoom);
};
