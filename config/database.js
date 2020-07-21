const mongoose = require('mongoose');

const { MONGODB_URI_LIVE, MONGODB_URI_LOCAL } = require('./environment');

mongoose
    .connect(MONGODB_URI_LIVE || MONGODB_URI_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('Success connect to database');
    })
    .catch((error) => {
        console.log(error);
    });

const db = mongoose.connection;

module.exports = db;
