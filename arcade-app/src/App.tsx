import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './view/Login';
import Principal from './view/Principal';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GalagaMenu from './view/GalagaMenu';
import Register from './view/Register';
import Score from './view/score';
import Store from './view/store';


function App() {
  return (
    
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/principal" element={<Principal/>} />
        <Route path="/galagaMenu" element={<GalagaMenu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Register/>} />
        <Route path="/score" element={<Score/>} />
        <Route path="/store" element={<Store/>} />
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
