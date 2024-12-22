const express = require('express');
const { getHotels } = require('../controllers/hotels');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Hotel Finder API');
});

router.get('/hotels', getHotels);

module.exports = router;