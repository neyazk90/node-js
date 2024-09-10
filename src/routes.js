const express = require('express');
const productController = require('./controllers/products.controller');
const errorController = require('./controllers/error');
const route = express();


route.get('/', productController.getProductListing);

route.use(errorController.get404Page)
module.exports = route;