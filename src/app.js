const express = require('express');
const routes = require('./routes/index'); // tu router real
const app = express();

// ✅ Esto debe estar antes de las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`📩 ${req.method} ${req.path}`);
  next();
});
app.use('/api', routes);

module.exports = app;
