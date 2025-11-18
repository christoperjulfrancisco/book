const helmet = require('helmet');
const cors = require('cors');

const securityMiddleware = (app) => {
    app.use(helmet());
    app.use(cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }));
};

module.exports = securityMiddleware;