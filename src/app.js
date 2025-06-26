const express = require('express');
const cors = require('cors');
const routes = require('./routes');

function configureApp(io) {
  const app = express();

  app.use(cors({
    origin: '*', // o ['http://127.0.0.1:5500']
    methods: ['GET', 'POST'],
  }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    req.io = io;
    next();
  });

  app.use('/api', routes);

  return app;
}

module.exports = configureApp;
