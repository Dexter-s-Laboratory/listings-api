require('dotenv').config();
const { initializeApp } = require('firebase-admin/app');
module.exports.firebase = initializeApp();
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes.js');
const { decodeToken } = require('./middleware');

app.use(morgan('dev'))
app.use(express.json());

app.use(decodeToken);

app.get('/test', (req, res) => {
  res.send('hello listings world');
});

app.use('/api', router);

app.all('/', (req, res) => {
  res.status(404).end();
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});