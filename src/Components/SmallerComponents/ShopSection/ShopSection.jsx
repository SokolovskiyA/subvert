import React from 'react'
import './ShopSection.scss'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import MercghItem from '../MerchItem/MerchItem';

function ShopSection() {
    const navigate = useNavigate();

    const moreMerch = (e) => {
        e.preventDefault();
        navigate('/audio')
    }
    return (
        <div className='shop'>
            <h2>Wear our merch</h2>
            <Button click={moreMerch} classN="shop__link" text="buy more merch"/>
            <div className="shop__merch">
                <MercghItem/>
                <MercghItem/>
                <MercghItem/>
                <MercghItem/>
            </div>
        </div>
    )
}

export default ShopSection
