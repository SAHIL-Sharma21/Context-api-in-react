//creating context here.
import {createContext, useState} from 'react'


//created context
export const CounterContext = createContext(null);




//now passing prop value which is important in this step >>> this is actual value which our componets will access
export const CounterProvider = (props) => {

    //now making state for the context
    const [count, setCount] = useState(1);

    return <CounterContext.Provider value={{count, setCount}}>{props.children}</CounterContext.Provider>
}