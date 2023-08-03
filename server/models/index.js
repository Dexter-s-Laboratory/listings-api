const db = require("../db");

module.exports = {
  getProductsFromDB: () => {
    return db.query("SELECT * FROM products");
  },

  getListingsByIdFromDB: (id) => {
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
    return db.query(query, [id]);
  },

  getActiveListingsByUserIdFromDB: (user_id) => {
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
      L.seller_id = $1 AND
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
    return db.query(query, [user_id]);
  },

  getMyListingsFromDB: (id) => {
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
      L.seller_id = $1
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
    return db.query(query, [id]);
  },

  createListingInDB: (listing) => {
    let query = `
      INSERT INTO listings (
        seller_id,
        product_id,
        transaction_id,
        condition,
        price,
        description,
        status,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id;`;
    return db.query(query, [
      listing.seller_id,
      listing.product_id,
      listing.transaction_id,
      listing.condition,
      listing.price,
      listing.description,
      listing.status,
      date.now(),
    ]);
  },

  createProductInDB: (product) => {
    let query = `
        INSERT INTO products (
          name,
          category,
          description
        ) VALUES ($1, $2, $3)
        RETURNING id;`;
    return db.query(query, [
      product.name,
      product.category,
      product.description,
    ]);
  },

  updateListingDetailsInDB: (id, listing) => {
    let query = `
      UPDATE listings
      SET
        transaction_id = $1,
        condition = $2,
        price = $3,
        description = $4,
        status = $5,
      WHERE id = $6;`;
    return db.query(query, [
      listing.transaction_id,
      listing.condition,
      listing.price,
      listing.description,
      listing.status,
      id,
    ]);
  },

  deleteListingFromDB: (id) => {
    let query = `
      DELETE FROM listings
      WHERE id = $1;`;
    return db.query(query, [id]);
  },
};
