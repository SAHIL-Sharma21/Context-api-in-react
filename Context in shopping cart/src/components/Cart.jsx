import React, {useContext} from 'react'
import {CartContext} from '../context/Cart'

const Cart = () => {
    const cart = useContext(CartContext);

  return (
    <div className='cart'>
        <h1>Cart</h1>
           {cart && cart.items.map((item) => (
            <li>{item.name} - ${item.price}</li>
           ))}

        <h4>Total : </h4>
    </div>
  )
}

export default Cart