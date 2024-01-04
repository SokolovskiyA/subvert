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
class Product {
    constructor(id, image) {
        this.name = ''
        this.id = id;
        this.image = image;
    }
}
class Option {
    constructor (id, price, size, color, image, avl, name) {
        this.name = name
        this.variant_id = id;
        this.price = price;
        this.size = size
        this.color = color
        this.image = image;
        this.qty = 1;
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
    let products = [];
    const data = await getPrintfulData('store/products');
    data.forEach((p) => {
        products.push(new Product(p.id, p.thumbnail_url))
    });
    for (let i = 0; i < products.length; i++) {
        const response = await getPrintfulData(`store/products/${products[i].id}`);
        let store_products = response.sync_variants.filter((item)=>item.availability_status === 'active')
        const response2 = await getPrintfulData(`products/${response.sync_variants[0].product.product_id}`)
        let sync_products = response2.variants
        products[i].name = response.sync_product.name
        products[i].options = [];
        store_products.map(option => {
            const synced = sync_products.find((item) => item.id === option.variant_id)
            products[i].options.push(new Option (option.variant_id, option.retail_price, option.size, synced.color_code, option.files[1].preview_url, option.availability_status, products[i].name))
        })
    }
    return (products)
}


//endpoints
app.get('/products', async (req, res) => {
    const data = await getProducts()
    res.send(JSON.stringify(data));
});
app.get('/countries', async (req, res) => {
    const data = await getPrintfulData('/countries')
    res.send(JSON.stringify(data));
});

app.post('/get_estimate', async (req, res) => {
    console.log(req.body)
    await axios.post('https://api.printful.com/orders', {
        shipping : "STANDARD",
        recipient: {
            name: req.body.recipient.name,
            address1: req.body.recipient.address1,
            city: req.body.recipient.city,
            state_name: req.body.recipient.state_name,
            state_code: req.body.recipient.state_code,
            country_name: req.body.recipient.country_name,
            country_code: req.body.recipient.country_code,
            zip: req.body.recipient.zip,
        },
        items: req.body.items,
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        }
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data.result));
    })
    .catch(function (error) {
        console.log(error);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});









