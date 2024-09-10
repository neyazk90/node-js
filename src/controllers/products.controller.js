const Product = require('../models/product');

exports.getProductListing = (req, res, next) => { 
    const product = new Product('dummy product', 'A Test Product');
    product.save();
    // res.send('Welcome to Node World! from Controller')
    res.send(Product.fetchAllProduct());
}