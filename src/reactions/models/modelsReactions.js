// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/your-db-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir los esquemas
const ReactionSchema = new mongoose.Schema({
  userId: String,
  type: { type: String, enum: ['triste', 'conforme', 'enojado'], required: true },
  timestamp: { type: Date, default: Date.now }
});

const RoomSchema = new mongoose.Schema({
  name: String,
  reactions: [ReactionSchema]
});

const Room = mongoose.model('Room', RoomSchema);