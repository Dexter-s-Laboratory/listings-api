const express = require('express');
const PORT = 3000 || process.env.PORT;

const app = express();
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

var router = require('./routes.js');
app.use (router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});