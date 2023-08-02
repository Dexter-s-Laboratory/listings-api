var controller = require('./controllers');
var router = require('express').Router();

// GET /api/listings?query=
router.get('/api/products', controller.getProducts);

// GET /api/listings/:listing_id
router.get('/api/listings/:listing_id', controller.getListingById);

// GET mylistings by user_id
router.get('/api/listings/:user_id/', controller.getMyListingsById)

// POST /api/listings (authentication required)
router.post('/api/listings', controller.createListing);

//POST /api/

// PUT /api/listings/:listing_id/:attribute (authentication required)
router.put('/api/listings/:listing_id/details', controller.updateListingDetails);

// DELETE /api/listings/:listing_id (authentication required)
router.delete('/api/listings/:listing_id', controller.deleteListing);

module.exports = router;

