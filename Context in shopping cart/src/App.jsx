import Item from './components/Item'
import Cart from './components/Cart'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Shopping cart using context </h1>
      <Item name="MacBook Air M3" price={3000}/>
      <Item name= "keychron mechanical keyboard" price={600} />
      <Item name="Samsung dual ultra monitor" price={2000} />
      <br />
      <Cart />
    </>
  )
}

export default App
