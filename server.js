const http = require('http');
const socketIO = require('socket.io');
const configureApp = require('./src/app'); // 👈 esto importa la función
const express = require('express');

const ioServer = express();
const server = http.createServer(ioServer);
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const app = configureApp(io); // 👈 pasa io a la función
ioServer.use(app); // 👈 usa app configurado

// Socket listener opcional
io.on('connection', (socket) => {
  console.log('🟢 WebSocket conectado:', socket.id);
});

server.listen(3000, () => {
  console.log('🚀 Servidor escuchando en http://localhost:3000');
});
