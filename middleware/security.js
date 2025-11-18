// middleware/security.js
const helmet = require('helmet');
const cors = require('cors');

const securityMiddleware = (app) => {
    app.use(helmet());
    // Configure CORS options as needed (e.g., restricting origins)
    app.use(cors({
        origin: '*', // Allows all origins for simplicity in testing
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }));
};

module.exports = securityMiddleware;