const express = require('express');
const cors = require('cors');

const { db } = require('./config');
const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/users'));

if (db) {
    app.listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`);
    });
}
