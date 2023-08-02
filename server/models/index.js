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

  getMyListingsFromDB: async (id) => {
    let query = `
    SELECT jsonb_build_object(
        'active',
        jsonb_agg(CASE WHEN L.status = 'active' THEN jsonb_build_object(
            'id', L.id,
            'seller_id', L.seller_id,
            'product_id', L.product_id,
            'transaction_id', L.transaction_id,
            'condition', L.condition,
            'price', L.price,
            'description', L.description,
            'status', L.status,
            'created_at', L.created_at,
            'photos', LP.photos
        ) ELSE NULL END),
        'inactive',
        jsonb_agg(CASE WHEN L.status = 'inactive' THEN jsonb_build_object(
            'id', L.id,
            'seller_id', L.seller_id,
            'product_id', L.product_id,
            'transaction_id', L.transaction_id,
            'condition', L.condition,
            'price', L.price,
            'description', L.description,
            'status', L.status,
            'created_at', L.created_at,
            'photos', LP.photos
        ) ELSE NULL END),
        'fulfilled',
        jsonb_agg(CASE WHEN L.status = 'fulfilled' THEN jsonb_build_object(
            'id', L.id,
            'seller_id', L.seller_id,
            'product_id', L.product_id,
            'transaction_id', L.transaction_id,
            'condition', L.condition,
            'price', L.price,
            'description', L.description,
            'status', L.status,
            'created_at', L.created_at,
            'photos', LP.photos
        ) ELSE NULL END),
        'unfulfilled',
        jsonb_agg(CASE WHEN L.status = 'unfulfilled' THEN jsonb_build_object(
            'id', L.id,
            'seller_id', L.seller_id,
            'product_id', L.product_id,
            'transaction_id', L.transaction_id,
            'condition', L.condition,
            'price', L.price,
            'description', L.description,
            'status', L.status,
            'created_at', L.created_at,
            'photos', LP.photos
        ) ELSE NULL END)
    ) AS listings
    FROM (
        SELECT L.*, array_agg(LP.photo_url) as photos
        FROM listings L
        LEFT JOIN listing_photos LP ON L.id = LP.listing_id
        WHERE L.seller_id = $1
        GROUP BY L.id
    ) L
`
  return await db.query(query,[id]);
  },

  createListingInDB: () => {

  },

  updateListingDetailsInDB: () => {

  },

  deleteListingFromDB: () => {

  }
};