const { createReaction }=  require('../../controllers/create_reaction');

module.exports = function(router) {
    router.post('/api/reactions', createReaction);
}