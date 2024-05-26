const { deleteRoomId } = require('../../db/spacesdb/spacesModels');

exports.deleteRoom = async(req, res) =>{
    try {
         // .-extract the request id
    const { id } = req.params
    const deletedRoom = await deleteUserById(id);
    return res.json(deletedRoom);

    } catch (err) {
        return res.sendStatus(400);   
}
}