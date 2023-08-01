// db.js
const pgp = require('pg-promise')();
const connectionURI = process.env.DATABASE_URI;
//example DATABASE_URI: 'postgres://username:password@localhost:5432/dbname'

const db = pgp(connectionURI);

module.exports = db;
