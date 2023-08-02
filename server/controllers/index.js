const model = require("../models");
//model. getProductsFromDB, getListingsByIdFromDB, createListingInDB, updateListingDetailsInDB, deleteListingFromDB

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
    res.end();
  },

  updateListingDetails: (req, res) => {
    let id = req.params.listing_id;

    res.end();
  },

  deleteListing: (req, res) => {
    let id = req.params.listing_id;

    res.end();
  },
};
