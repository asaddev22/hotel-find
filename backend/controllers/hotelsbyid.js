const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { handleApiError } = require('../middleware/error');

const router = express.Router();

router.get('/hotels/:id', async (req, res) => {
    const hotelId = req.params.id;
    try {
        const data = await fs.readFile(path.resolve(__dirname, '../data/hotels.json'), 'utf8');
        const hotels = JSON.parse(data);
        const hotel = hotels.find(h => h.id.toString() === hotelId); 
        if (hotel) {
            if (!hotel.imageUrl) {
                hotel.imageUrl = 'https://via.placeholder.com/350x200'; // Demo image URL
            }
            res.send(hotel);
        } else {
            res.status(404).send({ error: 'Hotel not found' });
        }
    } catch (err) {
        handleApiError(err, res, 'Hotel');
    }
});

module.exports = router;
