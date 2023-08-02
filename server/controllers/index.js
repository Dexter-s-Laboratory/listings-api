const model = require("../models");

module.exports = {
  getProducts: (req, res) => {
    try {
      let products = model.getProductsFromDB();
      res.send(products);
    } catch (err) {
      res.status(400).send(err);
    };
  },

  getListingById: (req, res) => {
    try {
      let id = req.query.listing_id;
      res.send(model.getListingsByIdFromDB(id));
    } catch (err) {
      res.status(400).send(err);
    };
  },
  getMyListings: (req,res) => {
    try {
      let id = req.query.user_id;
      res.send(model.getMyListingsFromDB(id));
    } catch (err) {
      res.status(400).send(err);
    };
  },

  createListing: (req, res) => {
    try {
      res.status(201).send(model.createListingInDB(req.body));
    } catch (err) {
      res.status(400).send(err);
    };
  },
  createProduct: (req,res) => {
    try {
      res.status(201).send(model.createProductInDB(req.body))
    } catch (err) {
      res.status(400).send(err);
    };
  },

  updateListingDetails: (req, res) => {
    let id = req.params.listing_id;
    try {
      res.send(model.updateListingDetailsInDB(id, req.body));
    } catch (err) {
      res.status(400).send(err);
    };
  },

  deleteListing: (req, res) => {
    let id = req.params.listing_id;
    try {
      res.status(204).send(model.deleteListingFromDB(id, req.body));
    } catch (err) {
      res.status(400).send(err);
    };
  },
};
