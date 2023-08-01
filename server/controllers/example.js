var { example } = require('../models');

module.exports = {
  get: (req, res) => {
    try {
      res.send(example.getALL(req.query.product_id))
    } catch (err) {
      res.status(400).send(err)
    }
  },

  post: (req, res) => {
    var data = req.body;
    try {
      example.create(data);
      res.status(201).send('Successfully posted')
    } catch (err) {
      res.status(400).send(err)
    }
  },

};

