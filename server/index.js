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

async function getPrintfulData(endpoint) {
    const response = await axios.get(`https://api.printful.com/${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    });
    return (response.data.result);
}

app.get('/products', async (req, res) => {
    const data = await getPrintfulData('store/products');
    res.send(JSON.stringify(data));
});
app.get('/product-variants', async (req, res) => {
    const data = await getPrintfulData('store/products');
    const ids = [];
    data.forEach((product) => {
        ids.push(product.id);
    }
    );
    const variants = [];
    for (let i = 0; i < ids.length; i++) {
        const response = await getPrintfulData(`store/products/${ids[i]}`);
        variants.push(response);
    }
    variants.map(item => {
        item.variant_options = []
        item.sync_variants.map(i => {
            item.variant_options.push(i.variant_id)
        })
    })
    res.send(JSON.stringify(variants));
});

app.get('/variants', async (req, res) => {
    console.log(req.body)
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});









