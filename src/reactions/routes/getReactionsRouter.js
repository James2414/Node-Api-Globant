const { getAllReactions } = require('../controllers/getReactions');

module.exports = function (router) {
    router.get('/api/reactions', getAllReactions); 
}