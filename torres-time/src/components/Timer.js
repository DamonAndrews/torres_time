import React from 'react';

import logo from './logo.svg';

const timer = {
  Banner:{
      fontWeight: 'bold',
      fontFamily: 'Archivo', 
      textDecoration: 'none',
      backgroundColor: 'grey',
      height: 'auto',
      width: 'auto',
      display: "flex",
  },}

function Timer() {
  return (

<div>
  <div style={timer.Banner}>
                        <h1 style={timer.Banner}>Enter Time:</h1><br></br><br></br>

                        <div>
                            <label ><b>Active Time:</b></label><br></br>   
                            <input
                            placeholder="Minutes (Enter any)"
                            name="username"
                            type="username"
                            id="username"/>
                        </div>

                        <div>
                            <label><b>Rest Time:</b></label><br></br>   
                            <input
                            placeholder="Minutes (Enter any)"
                            name="username"
                            type="username"
                            id="username"/>
                        </div>
                        </div>
    </div>
  );
}

export default Timer;


