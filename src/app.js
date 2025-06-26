// src/app.js
const express = require('express');
const routes = require('./routes');

function configureApp(io) {
  const app = express(); // 👈 MUY IMPORTANTE: crear dentro de la función

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Inyectar socket.io en cada request
  app.use((req, res, next) => {
    req.io = io;
    next();
  });

  app.use('/api', routes);

  return app;
}

module.exports = configureApp;
