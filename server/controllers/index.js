const model = require('../models');
//model. getProductsFromDB, getListingsByIdFromDB, createListingInDB, updateListingDetailsInDB, deleteListingFromDB


module.exports = {

  getProducts: (req, res) => {
    let products = model.getProductsFromDB()


    res.end();
  },

  getListingById: (req, res) => {
    let id = req.query.listing_id;

    res.end();
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
  }
};