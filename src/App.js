import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Component/Product/Product';

function App() {

  const [products, setProducts] = useState([])

  // useEffect( () => {
  //   fetch('../public/fakeDb.Json')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // },[])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then( data => setProducts(data.products))
  },[])

  return (
    <div className="App">
      {
        products.map( product => <Product items = {product}></Product>
        )
      }
     
    </div>
  );
}

export default App;
