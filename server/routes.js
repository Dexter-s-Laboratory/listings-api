var controller = require('./controllers');
var router = require('express').Router();

// GET /api/listings?query=
router.get('/api/lp', controller.getProducts);

// GET /api/lp/:listing_id (product)
router.get('/api/lp/:listing_id', controller.getListingById);

// GET mylistings by user_id
router.get('/api/lp/mylistings/:user_id', controller.getMyListings);

//GET listings by
router.get('/api/lp/user/:user_id', controller.getListingByUserId);


// POST /api/listings (authentication required)
router.post('/api/lp', controller.createListing);

//POST /api/products
router.post('/api/lp', controller.createProduct)

// PUT /api/listings/:listing_id/:attribute (authentication required)
router.put('/api/lp/:listing_id/details', controller.updateListingDetails);

// DELETE /api/listings/:listing_id (authentication required)
router.delete('/api/lp/:listing_id', controller.deleteListing);

module.exports = router;

