import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
            path = '/react-gh-pages'
            exact
            element ={<LandingPage />}/>
            <Route 
            path = '/torres_time/'
            element ={<LandingPage />}/>
            <Route 
            path = '/torres_time'
            element ={<LandingPage />}/>
            <Route 
            path = '/'
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
