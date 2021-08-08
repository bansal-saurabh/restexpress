const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./api-routes');

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

mongoose.connect('mongodb://localhost/restexpress', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

if (!db) {
    console.log('Error connecting to Database!');
} else {
    console.log('Database connected succesfully.')
}

app.get('/', (req, res) => {
    res.send('Hello World with Express!');
})  

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})