const db = require('../db');

module.exports = {

  getProductsFromDB: async () => {
    return await db.query('SELECT * FROM products');
  },

  getListingsByIdFromDB: async (id) => {
    return await db.query('')
  },

  createListingInDB: () => {

  },

  updateListingDetailsInDB: () => {

  },

  deleteListingFromDB: () => {

  }
};