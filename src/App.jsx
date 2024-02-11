import './App.css'
import Counter from './components/Counter'
import { useContext } from 'react'; //importing useContext hook from react to consume our context
import {CounterContext} from './context/Counter'

function App() {

  //using context here by using useContext hook provided by react
  const counterState = useContext(CounterContext);
  // console.log(counterState); // printing object/our state which is passed to its children

  return (
    <>
      <h1>Context api in react </h1>
      <h2>Count is {counterState.count}</h2>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
