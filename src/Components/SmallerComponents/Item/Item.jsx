import React from 'react'
import './Item.scss'

function Item({product, add}) {
   
return (
    <div key={product.sync_product.id} className='shopItem'>
        <h3 className='shopItem__title'>{product.sync_product.name}</h3>
        <img className='shopItem__pic' src={product.sync_product.thumbnail_url} alt={product.sync_product.name}/>
        <p>{product.sync_product.description}</p>
        <p>{product.sync_product.price}</p>
        <button onClick={(e) => add(e, product)}>Add to Cart</button>
    </div>
)
}

export default Item