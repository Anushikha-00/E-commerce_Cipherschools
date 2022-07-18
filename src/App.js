

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';



function App() {
  return (
    
    <Router>
      <div className="App">
       <Routes>
         <Route path="/checkout" element={<Checkout /> } />
       </Routes>
       <Routes>
         <Route path="/login" element={<Login /> } />
       </Routes>
       <Routes>
         <Route path="/" element={[<Header />,<Home />] } />
       </Routes>

      </div>
      
      
    </Router>
  );
}

export default App;