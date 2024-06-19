// controllers/roomController.js

const Room = require('../../Models/spacesdb/spaces_models');

exports.createRoom = async (req, res) => {
    try {
        const { name, floor, tower } = req.body;

        // .-We create a new room with the given name
        const newRoom = await Room.createRoom({ name, floor, tower });
        return res.status(201).json(newRoom);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al crear la sala" });
    }
};

exports.getRooms = async (req, res) => {
    try{
        const rooms = await Room.getRooms();
        res.json(rooms);
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'error al traer las salas' });
    }
}

