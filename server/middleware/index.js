const { firebase } = require('../server.js');
const { getAuth } = require('firebase-admin/auth');


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
        return next();
        })
        .catch((err) => {
          console.error('Error decoding token:', err);
          res.status(403).send({ error: err });
        });
    }

    }

};