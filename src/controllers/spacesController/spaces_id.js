const { reduce, map } = require('lodash');
const { getRoomsId } = require('../../Models/spacesdb/spaces_models');

exports.getRoomById = async (req, res) => {
    try {
        const { id } = req.params;
        // .-Valid the Id
        if (!id) {
            return res.status(400).json({ error: 'ID is required' });
        }
        const room = await getRoomsId(id);
map()
        // .-Check if the room exists
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        return res.status(200).json(room);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}




