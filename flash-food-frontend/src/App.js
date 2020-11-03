import React from 'react'
import './App.css';
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch >
          <Route path='/productdetail'>
            <ProductDetail />
          </Route>
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
