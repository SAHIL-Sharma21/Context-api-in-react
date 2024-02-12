// making cart context
import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

//best practice code make our custom hook
export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
}


export const CartProvider = ({children}) => {

    const[items, setItems] = useState([]);

    return <CartContext.Provider value={{items, setItems}}>{children}</CartContext.Provider>
}