var controller = require('./controllers');
var router = require('express').Router();

// GET /api/listings?query=
router.get('/listings', controller.getListings);

// GET /api/listings/:listing_id
router.get('/listings/:listing_id', controller.getListingById);

// POST /api/listings (authentication required)
router.post('/listings', controller.createListing);

// PUT /api/listings/:listing_id/:attribute (authentication required)
router.put('/listings/:listing_id/details', controller.updateListingDetails);

// DELETE /api/listings/:listing_id (authentication required)
router.delete('/listings/:listing_id', controller.deleteListing);

module.exports = router;

