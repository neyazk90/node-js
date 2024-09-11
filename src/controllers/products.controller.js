const Product = require('../models/product');

exports.getProductListing = (req, res, next) => { 
    const product = new Product('Hello World', 'Contains Node JS Version 20');
    product.save();
    // res.send('Welcome to Node World! from Controller')
    Product.fetchAllProduct((fileContent) => {
        res.send(fileContent)
    }); //

    // res.send(Product.fetchAllProduct()); //when dummy array in the model is returned

}