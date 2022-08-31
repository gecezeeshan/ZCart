import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPanel from './ShoppingCart/CartPanel';
import { useState } from 'react';
import Layout from './Core/Layout';
import Home from './Core/Home';
import About from './Core/About';
import { Routes, Route } from 'react-router-dom';
import Checkout from './ShoppingCart/Cart/Checkout';
import ProductDetail from './ShoppingCart/Product/ProdutDetail';

function App() {


  return (
    <>
      <Layout>      
        <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/products' element={<CartPanel />}></Route>
      <Route path='/ProductDetail/:id' element={<ProductDetail />}></Route>
      <Route path='/cart' element={<Checkout />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes> 
      </Layout>
    </>
  );
}

export default App;
