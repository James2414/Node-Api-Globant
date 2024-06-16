const { createReaction } =  require('../../controllers/create_reaction');
const { getAllReactions } = require('../../controllers/get_reactions')

module.exports = function(router) {
    router.post('/api/reactions', createReaction);
    router.get('/api/reactions', getAllReactions);
}