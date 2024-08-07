import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import ShippingDetails from './components/ShippingDetails';
import Order from './components/Order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/shipping-details' element={<ShippingDetails />} />
        <Route path='/order' element={<Order />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
