const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());

function configureApp(io) {
  // Middleware para inyectar io en cada req
  app.use((req, res, next) => {
    req.io = io;
    next();
  });

  app.use('/api', routes);

  return app;
}

module.exports = configureApp;
