import React  from 'react'
import {useCart} from '../context/Cart'

const Cart = () => {


    //now here using our custom hook
    const cart = useCart();

    //calculating total
    const total = cart.items.reduce((acc, amt) => {
        return acc + amt.price;
    }, 0)

  return (
    <div className='cart'>
        <h1>Cart</h1>
           {cart && cart.items.map((item) => (
            <li>{item.name} - ${item.price}</li>
           ))}

        <h4>Total : ${total}</h4>
    </div>
  )
}

export default Cart