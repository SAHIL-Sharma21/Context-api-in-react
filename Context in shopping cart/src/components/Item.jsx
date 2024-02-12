import React from 'react'
import {CartContext, useCart} from '../context/Cart'


const Item = ({name, price}) => {

  // const cart = useContext(CartContext);

  //changing code for optimization
  const cart = useCart();


  //adding to cart
  const handleAdd = () => {
    cart.setItems([...cart.items, {name, price}]);
    console.log(cart);
  }

  return (
    <>
      <div className='item-card'>
        <h4>{name}</h4>
        <p>Price : ${price}</p>
        <button onClick={handleAdd}>Add to cart</button>
      </div>
    </>
  )
}

export default Item;