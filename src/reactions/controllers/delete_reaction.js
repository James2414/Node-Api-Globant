const { deleteReactionnId } = require('../models/reactions_models');

exports.deleteReaction = async(req, res) =>{
    try{
        const { id } = req.params;
        const deletedReaction = await deleteReactionnId(id);
        return res.json(deletedReaction);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}