const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
  hallId: {
    // !-esto se utiliza comUnmente para referenciar documentos en otras colecciones de mongoDb
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
    enum: ['fassinante', 'conforme', 'disgustado'],
    required: true
  }
},
{
  timestamps: true  
}
);

const Reaction = mongoose.model('Reaction', ReactionSchema);

module.exports = Reaction;
