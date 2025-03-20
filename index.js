const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/face-api', express.static(path.join(__dirname, 'node_modules', 'face-api.js', 'dist')));

io.on('connection', (socket) => {
  console.log('Web client connected');

  socket.on('expression', (data) => {
    console.log(`Expression detected: ${data.expression}`);
    io.emit('expression', data);
  });

  socket.on('disconnect', () => {
    console.log('Web client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
