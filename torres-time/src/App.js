import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Timer from './components/Timer';
import Login from './components/Login';
// import Create from './components/Create';

function App() {
  return (
    <>
  <Router>
  
            <Header />

            <Routes>

            <Route 
            path = '/'
            exact
            element ={<LandingPage />}/>
            <Route 
            path = '/Timer'
            element ={<Timer />}/>
            <Route 
            path = '/Login'
            element ={<Login />}/>
            {/* <Route 
            path = '/Create'
            element ={<Create />}/> */}
            

            </Routes>
     </Router>      
  </>
  );
}

export default App;
