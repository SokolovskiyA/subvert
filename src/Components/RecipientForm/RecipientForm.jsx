import './RecipientForm.scss'
import React from 'react'
import CartContext from '../../Context/CartContext'
import { useState, useContext} from 'react'
import axios from 'axios'

function RecipientForm() {
    const { recipient, setRecipient } = useContext(CartContext)
    const  countries = ['Canada', 'United States']
    const [ states, setStates ] = useState([])
    

    const chooseCountry = (option) => {
        axios.post('http://localhost:5001/countries', {
            country: option
        })
        .then(function (response) {
            setStates(response.data.states)
            setRecipient({...recipient, 
                country_code: response.data.code, 
                country_name: response.data.name,
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    if (countries) return (
        <form className='cart__form'>
            <div className="cart__form_div">
                <label htmlFor="first_name">name</label>
                <input value={recipient.name} id="name" className='cart__form_input' type="text" onChange={e => setRecipient({...recipient, name: e.target.value} )}/>
                <label htmlFor="email">email</label>
                <input value={recipient.email} onChange={e => setRecipient({...recipient, email: e.target.value})} className='cart__form_input' type="email" id="email" />
                <label htmlFor="phone">phone number</label>
                <input value={recipient.phone} onChange={e => setRecipient({...recipient, phone: e.target.value})} className='cart__form_input' type="tel" id="phone"/>
            </div>
            <div className="cart__form_div">
                <label htmlFor="address">address</label>
                <input value={recipient.address1} onChange={e => setRecipient( {...recipient, address1: e.target.value})} className='cart__form_input' type='text' id='address'/>
                <label htmlFor="city">city</label>
                <input value={recipient.city} onChange={e => setRecipient( {...recipient, city: e.target.value})} className='cart__form_input' type='text' id='city'/>
                <label htmlFor="country">country</label>
                <select className='cart__form_input' onChange={e => chooseCountry(e.target.value)}>
                    <option value="">Choose country</option>
                    {countries.map((country) => 
                        <option key={country} value={country}>{country}</option>
                    )}
                </select>
                <label htmlFor="state">state</label>
                <select value={recipient.state} onChange={e => setRecipient( {...recipient, state_name: e.target.value, state_code: states.find(state => state.name === e.target.value).code}) } className='cart__form_input' type='text' id='state'>
                <option value="">Choose state</option>
                {states ? states.map((state) => 
                        <option key={state.name} value={state.name}>{state.name}</option>
                    ) : null }
                </select>
                <label htmlFor="zip">postal code</label>
                <input value={recipient.zip} onChange={e => setRecipient( {...recipient, zip: e.target.value}) } className='cart__form_input' type='text' id='zip' />
            </div>
        </form>
    )
    else return (<div></div>)
}

export default RecipientForm