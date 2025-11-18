require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/db');
const securityMiddleware = require('./middleware/security');
const errorHandler = require('./middleware/errorHandler');

//Import Routes and Swagger
const bookRoutes = require('./routes/bookRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

connectDB();

const app = express();

//Global Middleware
app.use(express.json());
securityMiddleware(app);

//Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Mount Router
app.use('/api/v1/books', bookRoutes);

//Custom Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});