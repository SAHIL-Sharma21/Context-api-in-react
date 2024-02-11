//creating context here.
import {createContext} from 'react'


//created context
export const CounterContext = createContext(null);


export const CounterProvider = (props) => {
    return <CounterContext.Provider>{props.children}</CounterContext.Provider>
}