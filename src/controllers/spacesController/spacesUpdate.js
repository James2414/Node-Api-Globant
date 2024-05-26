const {updateRooms} =  require('../../db/spacesdb/spacesModels')

exports.updateRoom = async (req, res) => {
    try {
        const { id } = req.params
        const room = await updateRooms(id)
        return res.status(200).json(room);
    }catch(err){
        console.error(err);
        return res.status(400).json(err);
    }
}