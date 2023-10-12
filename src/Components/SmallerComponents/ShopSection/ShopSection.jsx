import React from 'react'
import './ShopSection.scss'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import MercghItem from '../MerchItem/MerchItem';
import axios from 'axios'
import { useEffect, useState } from 'react'

function ShopSection() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5001/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    const navigate = useNavigate();
    const moreMerch = (e) => {
        e.preventDefault();
        navigate('/audio')
    }
    console.log(products)
    return (
        <div className='shop'>
            <h2>Wear our merch</h2>
            <Button click={moreMerch} classN="shop__link" text="see more merch"/>
            <div className="shop__merch">
                {products.map((product, index) => {
                    if (index > 3) {
                        return null
                    }
                    else return (
                        <MercghItem key={product.id} url={product.image} itemName={product.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ShopSection
