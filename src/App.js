import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Home from './Component/Home';
import About from './Component/About';
import Signup from './Component/signup';
import Signin from './Component/signin';
import Ticketbook from './Component/Ticketbook';
import Ticketshow from './Component/Ticketshow';
import Logshow from './Component/Logshow';
import Contact from './Component/Contact';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Ticketbook' element={<Ticketbook/>}/>
      <Route path='/Ticketshow' element={<Ticketshow/>}/>
      <Route path='/Logshow' element={<Logshow/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}


