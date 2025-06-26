const http = require('http');
const socketIO = require('socket.io');
const configureApp = require('./src/app');

const server = http.createServer(); // No creamos express aquí todavía
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const app = configureApp(io); // crea app con io ya inyectado

server.on('request', app); // usa app como manejador de requests

io.on('connection', (socket) => {
  console.log('🟢 WebSocket conectado:', socket.id);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
