import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Elements/Home';
import SignIn from './Elements/SignInPage';
import Cart from './Elements/Cart';
import HomeArrivals from './Elements/HomeArrivals';
import Cloth from './Elements/Cloths';
import Games from './Elements/Games';
import History from './Elements/History';
import Fetch from './Elements/FetchedData';
import Buy from './Elements/Buy';
import Payment from './Elements/Payment';
import Bankdetails from './Elements/BankDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/homearrival' element={<HomeArrivals />} />
        <Route path='/cloths' element={<Cloth />} />
        <Route path='/games' element={<Games />} />
        <Route path='/history' element={<History />} />
        <Route path='/fetch' element={<Fetch />} />
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/bankdetails' element={<Bankdetails/>}/>
      </Routes>
    </BrowserRouter>
  </>
);

