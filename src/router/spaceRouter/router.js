const { createRoom, getRooms } = require('../../controllers/spacesController/get_spaces');
const { deleteRoom } = require('../../controllers/spacesController/spaces_delete');
const { getRoomById } = require('../../controllers/spacesController/spaces_id');
const { updateRoom } = require('../../controllers/spacesController/spaces_update');



module.exports = function(router) {
    router.post('/api/room', createRoom);
    router.get('/api/room', getRooms);
    router.get('/api/room/:id', getRoomById);
    router.put('/api/room/:id', updateRoom);
    router.delete('/api/room/:id', deleteRoom);
};
