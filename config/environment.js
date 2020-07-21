require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGODB_URI_LOCAL: process.env.MONGODB_URI_LOCAL,
    MONGODB_URI_LIVE: process.env.MONGODB_URI_LIVE,
    JWT_SECRET: process.env.JWT_SECRET,
};
