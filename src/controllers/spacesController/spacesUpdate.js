const { updateRooms } =  require('../../db/spacesdb/spacesModels')

exports.updateRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ message: 'name is required' });
        }
        const updateRoom = await updateRooms(id, { name });
        return res.status(200).json(updateRoom);
    }catch(err){
        console.error(err);
        return res.status(400).json(err);
    }
}