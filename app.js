//importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const route = require('./routes/route');

//connet to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist', { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('connection to database mongodb successful');
});

//port no
const port = 3019;

//adding middleware
app.use(cors());

app.use(bodyparser.json());

//routes
app.use('/api',route);

app.get('/home',(req, res) => {
    res.send('homepage');
});

app.listen(port, () => {
    console.log('server started at port no '+port);
});