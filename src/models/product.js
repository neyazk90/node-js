const fs  = require('fs');
const path  = require('path');

// const products = [];
const p = path.join(path.dirname(require.main.filename), 'src/data', 'products.json');

const getDataFromFile = (cb) => { 
    fs.readFile(p, (err, data) => {
        if (err) {
            cb([]);
        } else {
            try {
                cb(JSON.parse(data));  
            } catch (parseErr) {
                console.log('Error parsing JSON:', parseErr);
            }
        }
    });
}

module.exports = class Product{
    constructor(name, description) {
        this.title = name;
        this.description = description;
    }

    save() { 
        // products.push(this);
        getDataFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (!err) {
                    console.log('File saved successfully');
                }
            });
        });
    }

    static fetchAllProduct(cb) {
        // return products;
        getDataFromFile(cb);
    }
}