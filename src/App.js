import { React, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Calendar from './pages/client/calendar';
import {Chat,HomeMess,Message} from './pages/client/chat';
import Layout from './pages/client/Layout';
import Settings from './pages/client/settings';
import Today from './pages/client/today';
import Login from './pages/client/login';
import Checkin from './pages/client/checkin';
import Checkout from './pages/client/checkout';
function App() {

  return (
  
  <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route path='/checkin' element={<Checkin />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/today' element={<Today />}></Route>
          <Route path='/calendar' element={<Calendar />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
          <Route path='/chat/mess' element={<HomeMess />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
