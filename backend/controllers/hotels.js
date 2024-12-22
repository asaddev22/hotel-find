const fs = require('fs').promises;
const path = require('path');
const { handleApiError } = require('../middleware/error');

const getHotels = async (req, res) => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, '../data/hotels.json'), 'utf8');
        res.send(JSON.parse(data));
    } catch (err) {
        handleApiError(err, res, 'hotels');
    }
};

module.exports = { getHotels };