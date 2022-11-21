import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Calendar from './pages/client/calendar';
import Chat from './pages/client/chat';
import Layout from './pages/client/Layout';
import Settings from './pages/client/settings';
import Today from './pages/client/today';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/today' element={<Today />}></Route>
            <Route path='/calendar' element={<Calendar />}></Route>
            <Route path='/chat' element={<Chat />}></Route>
            <Route path='/settings' element={<Settings />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
