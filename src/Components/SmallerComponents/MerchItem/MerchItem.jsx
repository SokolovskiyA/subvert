import React from 'react'
import './MerchItem.scss'
import { Link } from 'react-router-dom'
import puppet from '../../../Assets/puppets/YellowPuppet.png'
import cart from '../../../Assets/Images/shoppingCart.svg'


function MerchItem({url, itemName}) {
    return (
        <div className="item">
            <h3 className='item__title'>{itemName}</h3>
            <img src={url} alt="merch" className="item__img"/>
            <Link className="item__link" to='/store'>buy now <img src={cart} alt="shopping cart" className='item__shopping-cart'/> <img src={puppet} alt="puppet" className='item__button-puppet'/></Link>
        </div>
    )
}

export default MerchItem