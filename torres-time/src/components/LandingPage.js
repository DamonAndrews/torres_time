import React from 'react';
import Clock from '../images/outdoor_clock.jpg';
import Coach from '../images/Coach.jpg';

import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

const landingPage = {
  image:{
      height: '100',
      width: '100%',
   },
   startButton:{
    backgroundColor: 'silver',
    color: 'red',
    
   }
}

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={10000} style={landingPage.image}>
        <img
          className="vw-100 vh-100"
          src={Clock}
          alt="Daytime red twin bell alarm clock outside in the grass"
        />
        <Carousel.Caption>
        <Link to="/Timer"><button type="submit" class="btn btn-lg m-2" style={landingPage.startButton}><b>START WORKOUT</b></button></Link>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item interval={10000}>
        <img
          className="vw-100 vh-100"
          src={Clock}
          alt="Daytime red twin bell alarm clock outside in the grass"
        />
        <Carousel.Caption>
        <Link to="/Timer"><button type="submit" class="btn btn-lg m-2" style={landingPage.startButton}><b>START WORKOUT</b></button></Link>
          <h3></h3>
          <p>Pitter Patter</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;