///express server 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const apiKey = 'DwLaoIRBYFlqE7JcaTMF7klB7LKzXkJueUThMPKv';

//variables 
let products = [];
class Product {
    constructor(id, image) {
        this.id = id;
        this.image = image;
        this.colors = []
    }
}
class Option {
    constructor (id, price, size, image, avl, ) {
        this.variant_id = id;
        this.price = price;
        this.size = size
        this.image = image;
        this.availability = avl
    }
}



// functions
async function getPrintfulData(endpoint) {
    const response = await axios.get(`https://api.printful.com/${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    });
    return (response.data.result);
}
async function getProducts()  {
    const data = await getPrintfulData('store/products');
    
    data.forEach((p) => {
        products.push(new Product(p.id, p.thumbnail_url))
    });
    for (let i = 0; i < products.length; i++) {
        const response = await getPrintfulData(`store/products/${products[i].id}`);
        let variants = response.sync_variants
        products[i].name = response.sync_product.name
        products[i].options = [];
        variants.map(option => {
            products[i].colors.push(option.color)
            products[i].options.push(option.variant_id)
        })
        products[i].colors = products[i].colors.filter((value, index) => products[i].colors.indexOf(value) === index);
    }
}

//endpoints
app.get('/products', async (req, res) => {
    const data = await getProducts()
    res.send(JSON.stringify(products));
});

app.get('/variants', async (req, res) => {

});

app.get('/variants', async (req, res) => {

});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});









