var controller = require('./controllers');
var router = require('express').Router();

// GET /api/listings?query=
router.get('/lp', controller.getProducts);

// GET /api/lp/:listing_id (product)
router.get('/lp/:listing_id', controller.getListingById);

// GET mylistings by user_id
router.get('/lp/mylistings/:user_id', controller.getMyListings);

// GET listings by user_id
router.get('/lp/user/:user_id', controller.getListingByUserId);

// POST /api/listings (authentication required)
router.post('/lp', controller.createListing);

// POST /api/products
router.post('/lp/products', controller.createProduct)

// PUT /api/listings/:listing_id/:attribute (authentication required)
router.put('/lp/:listing_id/details', controller.updateListingDetails);

// DELETE /api/listings/:listing_id (authentication required)
router.delete('/lp/:listing_id', controller.deleteListing);

module.exports = router;

