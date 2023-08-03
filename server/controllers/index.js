const model = require("../models");

module.exports = {
  getProducts: async (req, res) => {
    try {
      let products = await model.getProductsFromDB();
      res.status(200).send(products);
    } catch (err) {
      res.status(400).send(err);
    };
  },

  getListingById: async (req, res) => {
    try {
      let id = req.params.listing_id;
      let listing = await model.getListingsByIdFromDB(id);
      res.status(200).send(listing);
    } catch (err) {
      res.status(400).send(err);
    };
  },

  getListingByUserId: async (req, res) => {
    try {
      let id = req.params.user_id;
      let listing = await model.getActiveListingsByUserIdFromDB(id);
      console.log(listing)
      res.status(200).send(listing);
    } catch (err) {
      res.status(400).send(err);
    };
  },

  getMyListings: async (req,res) => {
    try {
      let id = req.params.user_id;
      let listing = await model.getMyListingsFromDB(id);
      res.status(200).send(listing);
    } catch (err) {
      res.status(400).send(err);
    };
  },

  createListing: async (req, res) => {
    try {
      await model.createListingInDB(req.body)
      res.status(201).send('Listing has been created');
    } catch (err) {
      res.status(400).send(err);
    };
  },
  createProduct: async (req,res) => {
    try {
      await model.createProductInDB(req.body)
      res.status(201).send('Product has been created')
    } catch (err) {
      res.status(400).send(err);
    };
  },

  updateListingDetails: async (req, res) => {
    let id = req.params.listing_id;
    try {
      await model.updateListingDetailsInDB(id, req.body)
      res.send('Listing has been updated');
    } catch (err) {
      res.status(400).send(err);
    };
  },

  deleteListing: async (req, res) => {
    let id = req.params.listing_id;
    try {
      await model.deleteListingFromDB(id, req.body);
      res.status(204).send('listing has been deleted');
    } catch (err) {
      res.status(400).send(err);
    };
  },
};
