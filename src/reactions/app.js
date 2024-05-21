const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);



// Middleware para parsear JSON
app.use(express.json());

app.post('/rooms/:roomId/reactions', async (req, res) => {
  try {
    const { roomId } = req.params;
    const { userId, type } = req.body;

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).send('Room not found');
    }

    const reaction = { userId, type };
    room.reactions.push(reaction);
    await room.save();

    // Emitir el evento a través de WebSockets
    io.to(roomId).emit('new-reaction', reaction);

    res.status(201).send(room);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Manejar las conexiones WebSocket
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
