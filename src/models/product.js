const fs  = require('fs');
const path  = require('path');

const products = [];

module.exports = class Product{
    constructor(name, description) {
        this.title = name;
        this.description = description;
    }

    save() { 
        // products.push(this);

        const p = path.join(path.dirname(require.main.filename), 'src/data', 'products.json');

        fs.readFile(p, (err, data) => {
            let products = [];
            if (!err) {
                try {
                    products = JSON.parse(data);
                } catch (parseErr) {
                    console.log('Error parsing JSON:', parseErr);
                }
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (!err) {
                    console.log('File saved successfully');
                }
            });
        });
    }

    static fetchAllProduct() {
        return products;
    }
}