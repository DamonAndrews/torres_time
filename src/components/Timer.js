

import React  from 'react';
import Clock from 'react-live-clock';

var ReactFitText = require('react-fittext');


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
                        <ReactFitText compressor={0.4}>
          <h1>
            <Clock format="mm:ss" interval={1000} ticking={true} />
          </h1>
        </ReactFitText>
        
                        </div>
                        <h1>
            <Clock format="HH:mm:ss" interval={1000} ticking={true} />
          </h1>
    </div>
  );
}

export default Timer;


