// Simplified Swagger setup in server.js

const swaggerUi = require('swagger-ui-express');
// You will need to write a large object/file defining the OAS 3.0 spec.
const swaggerDocument = require('./swagger.json'); // or a JS file exporting the spec

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));