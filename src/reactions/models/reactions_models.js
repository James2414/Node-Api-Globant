const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
  hallId: {
    // .- This is commonly used to reference documents in other mongodb collections.
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sala',
    required: true
  },
  rol: { type: String, required: true },
  question: { type: String },
});
const Reaction = mongoose.model('Reaction', ReactionSchema);
const getReactions = () => Reaction.find();
const deleteReactionnId = () => Reaction.findByIdAndDelete(id);

module.exports = {
  Reaction,
  getReactions,
  deleteReactionnId
}


  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Usuario',
  //   required: true
  // },
  // typeReaction: {
  //   type: String,
  //   enum: ['fascinating', 'according', 'disgusted'],
  //   required: true
  // }


  // {
//   timestamps: true  
// }
