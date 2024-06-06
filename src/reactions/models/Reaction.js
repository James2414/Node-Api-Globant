const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
  hallId: {
    // .-this is commonly used to reference documents in other mongodb collections.
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sala',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  typeReaction: {
    type: String,
    enum: ['fascinating', 'according', 'disgusted'],
    required: true
  }
},
{
  timestamps: true  
}
);
const Reaction = mongoose.model('Reaction', ReactionSchema);
const getReactions = () => Reaction.find();

module.exports = {
  Reaction,
  getReactions
}
