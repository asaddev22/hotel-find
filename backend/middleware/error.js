// Helper function to handle API errors
const handleApiError = (error, res, resourceName) => {
    if (error.response) {
        const status = error.response.status;

        // API Rate Limit (429)
        if (status === 429) {
            console.error(`Error fetching ${resourceName}: API rate limit reached`);
            return res.status(429).json({
                error: `API rate limit reached. Please try again later.`,
            });
        }

        // Resource Not Found (404)
        if (status === 404) {
            console.error(`Error fetching ${resourceName}: Resource not found`);
            return res.status(404).json({
                error: `${resourceName} not found.`,
            });
        }

        // General error handling for other status codes
        console.error(`Error fetching ${resourceName}: ${error.message}`);
        return res.status(status).json({
            error: `Failed to fetch ${resourceName}. Status code: ${status}`,
        });
    } else {
        // Network or other unknown error
        console.error(`Error fetching ${resourceName}: ${error.message}`);
        return res.status(500).json({
            error: `Failed to fetch ${resourceName}. Please try again later.`,
        });
    }
};

// Example usage of handleApiError for fetching hotels
const fetchHotels = async (req, res) => {
    try {
        // ...code to fetch hotels...
    } catch (error) {
        handleApiError(error, res, 'hotels');
    }
};

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
    try {
        const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
        res.status(statusCode);
        res.json({
            message: err.message,
            // Include stack trace only in development mode
            stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        });
    } catch (error) {
        handleApiError(error, res, 'Error Handler');
    }
};

module.exports = { errorHandler, handleApiError, fetchHotels };
