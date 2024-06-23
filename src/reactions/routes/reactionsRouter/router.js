const { createReaction } =  require('../../controllers/create_reaction');
const { getAllReactions } = require('../../controllers/get_reactions')
const { deleteReaction } = require('../../controllers/delete_reaction')

module.exports = function(router) {
    router.post('/api/reactions', createReaction);
    router.get('/api/reactions', getAllReactions);
    router.delete('/api/reactions/:id', deleteReaction);
}