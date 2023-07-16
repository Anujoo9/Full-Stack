const dotenv = require('dotenv');

dotenv.config();

const node_env = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT) || 8080;

module.exports = {
    node_env,
    port,
};
