const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const client = require('./db');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to NotesAvi!</h1>`);
})

app.listen(port, () => {
    console.log('NotesAvi running on port: ' + port);
})
