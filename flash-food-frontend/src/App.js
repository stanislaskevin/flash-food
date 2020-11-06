import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import ProductDetail from './Pages/ProductDetail'
import axios from './axios'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
        const res =  await axios.get('/v1/products')
        setProduct(res.data)
        return res
    }
    fetchData()
  },[])
    
  return (
    <div className="app">
      <Router>
        <Switch >
          <Route path="/checkout">
              <Checkout />
          </Route>
          {product.map(({_id}) => (
            <Route path={`/productdetail/${_id}`}>            
              <ProductDetail
                _id={_id}
              />
            </Route> 
          ))}                    
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
        <h1>Veuillez passer votre navigateur en version Mobil ou Accéder directement depuis votre Mobil ou votre Tablette</h1>
    </div>
  );
}

export default App;
