import React from 'react'
import './Item.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Item({product, add}) {
    

return (
    <div key={product.sync_product.id} className='shopItem'>
        <h3 className='shopItem__title'>{product.sync_product.name}</h3>
        <img className='shopItem__pic' src={product.sync_product.thumbnail_url} alt={product.sync_product.name}/>
    </div>
)
}

export default Item