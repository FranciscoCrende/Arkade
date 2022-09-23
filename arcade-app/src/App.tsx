import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './view/Login';
import Principal from './view/Principal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/Principal" element={<Principal/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
