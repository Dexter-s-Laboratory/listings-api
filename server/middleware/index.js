const { firebase } = require('../server.js');
const { getAuth } = require('firebase-admin/auth');
const db = require('../db');

module.exports = {

  decodeToken: (req, res, next) => {
    const token = req.headers.authorization || null;

    if (!token) {
      req.headers.uid = null;
      return next();
    } else {
      getAuth(firebase)
        .verifyIdToken(token)
        .then((decodedToken) => {
          req.headers.uid = decodedToken.uid;
          return decodedToken.uid;
        })
        .catch((err) => {
          console.error('Error decoding token:', err);
          res.status(403).send({ error: err });
        })
        .then((uid) => {
          return db.query('SELECT id FROM users WHERE firebase_uid = $1', [uid]);
        })
        .then((result) => {
            if (!result[0].id) {
              res.status(404).end();
            } else {
              req.headers.userId = result[0].id;
              next();
            }
        })
        .catch((err) => {
          console.error('Error retrieving user_id from database:', err);
          res.status(500).end();
        });
    }

  }

};
