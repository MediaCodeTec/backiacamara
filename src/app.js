const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: '*',
    }
})

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use('/api', routes);

module.exports = app;
