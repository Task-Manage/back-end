const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const { db } = require('./config');
const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('pages/home');
});
app.use('/api/users', require('./routes/users'));

if (db) {
    app.listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`);
    });
}
