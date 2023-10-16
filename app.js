const express = require('express');
const helloRoutes = require('./routes/helloRoutes');

const app = express();

// Use the hello routes for API calls
app.use('/api', helloRoutes);

module.exports = app;

