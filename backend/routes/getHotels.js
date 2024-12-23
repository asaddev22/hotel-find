const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { handleApiError } = require('../middleware/error');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Hotel Finder API');
});

router.get('/hotels', async (req, res) => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, '../data/hotels.json'), 'utf8');
        const hotels = JSON.parse(data);
        res.send(hotels);
    } catch (err) {
        handleApiError(err, res, 'Hotels');
    }
});

module.exports = router;