
import { useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)
  
  const setCartCount = () =>{
    setCount(count+1)
  }
  return (
    <div className="App">
        <Header count={count}></Header>
        <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
