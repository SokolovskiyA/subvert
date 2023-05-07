import React from 'react'
import './MerchPage.scss'
import Header from '../SmallerComponents/Header/Header'
import axios from 'axios'
import { useEffect } from 'react'

function MerchPage() {
    const url = 'https://api.printful.com/store/products'
    const getProduct = () => {
        axios.get( url, {  
            headers: {
                Authorization: 'Bearer DwLaoIRBYFlqE7JcaTMF7klB7LKzXkJueUThMPKv'
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        getProduct()
    }, [])


    return (
        <div>  
            <Header/>
            <h2>Wear us</h2>
        </div>
    )
}

export default MerchPage