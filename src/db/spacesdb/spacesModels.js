// models/Room.js
const { values } = require('lodash');
const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const Room = mongoose.model('Room', roomSchema);

    // .-Functions for rooms
const deleteRoomId = (id) => Room.findByIdAndDelete(id)
const updateRooms = (id, values) => Room.findByIdAndUpdate(id, values, {new: true})
const getRooms = () => Room.find();
const getRoomsId = (id) => Room.findById(id);
const createRoom = (values) => {
    const newRoom = new Room(values);
    // .-Save the new room in data base
    return newRoom.save();
};

module.exports = {
    Room,
    createRoom,
    getRooms,
    getRoomsId,
    updateRooms,
    deleteRoomId
};

