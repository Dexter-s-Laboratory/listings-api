var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/example/:product_id', controller.example.get);

router.post('/example', controller.example.post);

router.get('/', controller.rootJestTest.get)

module.exports = router;

