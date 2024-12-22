const express = require('express');
const hotelRoutes = require('./routes/hotels');
const { errorHandler } = require('./middleware/error');

const app = express();

app.use('/', hotelRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
