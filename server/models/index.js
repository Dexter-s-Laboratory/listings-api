const db = require('../db');

module.exports = {

  getProductsFromDB: async () => {
    return await db.query('SELECT * FROM products');
  },

  getListingsByIdFromDB: async (id) => {
    let query = `
    SELECT
      L.id,
      L.seller_id,
      L.product_id,
      L.transaction_id,
      L.condition,
      L.price,
      L.description,
      L.status,
      L.created_at,
      ARRAY_AGG(LP.photo_url) AS photos
    FROM
      listings L
      LEFT JOIN listing_photos LP ON L.id = LP.listing_id
    WHERE
      L.product_id = $1 AND
      L.status = 'active'
    GROUP BY
      L.id,
      L.seller_id,
      L.product_id,
      L.transaction_id,
      L.condition,
      L.price,
      L.description,
      L.status,
      L.created_at`;
    return await db.query(query, [id])
  },

  createListingInDB: () => {

  },

  updateListingDetailsInDB: () => {

  },

  deleteListingFromDB: () => {

  }
};