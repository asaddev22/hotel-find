const express = require('express');
const cors = require('cors');
const app = express();
const hotels = require('./routes/getHotels.js');
const hotelsById = require('../backend/controllers/hotelsbyid');
const { errorHandler } = require('../backend/middleware/error');

// Enable CORS for requests from http://localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api', hotels);
app.use('/api', hotelsById);

// Global error handler
app.use(errorHandler);

app.listen(5000, () => {
    console.log("server is listening on port:", 5000);
});