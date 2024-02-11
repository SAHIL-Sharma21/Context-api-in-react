import React, {useContext} from 'react'
import {CounterContext} from '../context/Counter'

const Counter = () => {
    
    const countSetter = useContext(CounterContext);

    //defining handleIncrement method when btn is clicked
    const handleIncrement = () => {
        countSetter.setCount((prev) => prev + 2);
    }
    
    //defining handleDecrement method when btn is clicked
    const handleDecrement = () => {
        countSetter.setCount((prev) => prev - 2);
    }


    
    return (
        <>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )

    // return (
    //     <>
    //         <button onClick={() => countSetter.setCount(countSetter.count + 1)}>Increment</button>
    //         <button onClick={() => countSetter.setCount(countSetter.count - 1)}>Decrement</button>
    //     </>
    // )
}

export default Counter;

//another way to code above example in return
// return (
//     <>
//         <button onClick={() => countSetter.setCount(countSetter.count + 1)}>Increment</button>
//         <button onClick={() => countSetter.setCount(countSetter.count - 1)}>Decrement</button>
//     </>
// )