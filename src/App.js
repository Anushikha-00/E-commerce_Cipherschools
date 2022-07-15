

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './Checkout';
import Login from './Login';



function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
         <Route path="/checkout" element={<Checkout/> } />
       </Routes>
       <Routes>
         <Route path="/login" element={<Login/> } />
       </Routes>
       <Routes>
         <Route path="/" element={[<Header/>,<Home/>] } />
       </Routes>

        {/* <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;