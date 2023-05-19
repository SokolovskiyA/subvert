import React from 'react'
import './MerchPage.scss'
import Header from '../SmallerComponents/Header/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'

function MerchPage() {
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

    return (
        <div>  
            <Header/>
            <h2>Wear us</h2>
            {/*<img src={products[0].thumbnail_url} alt="merch" className="merch-img"/>*/}
        </div>
    )
}

export default MerchPage