// server.js (The main entry point)
require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./config/db');
const securityMiddleware = require('./middleware/security');
const errorHandler = require('./middleware/errorHandler');

// Import Routes and Swagger
const bookRoutes = require('./routes/bookRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json'); // Assume you created this file

// Connect to database
connectDB();

const app = express();

// Global Middleware
app.use(express.json());
securityMiddleware(app);

// Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Mount Router
app.use('/api/v1/books', bookRoutes);

// Custom Error Handler (MUST be last middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});