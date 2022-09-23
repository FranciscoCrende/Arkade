import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './view/Login';
import Principal from './view/Principal';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GalagaMenu from './view/GalagaMenu';
import Register from './view/Register';
import Score from './view/Score';
import Store from './view/Store';


function App() {
  return (
    
  <BrowserRouter>
    <div className="App">
      <Link to="/">Principal</Link>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/GalagaMenu" element={<GalagaMenu/>} />
        <Route path="/Principal" element={<Login/>} />
        <Route path="/Principal" element={<Register/>} />
        <Route path="/Principal" element={<Score/>} />
        <Route path="/Principal" element={<Store/>} />
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
