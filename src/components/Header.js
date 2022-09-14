import React from 'react';

import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const header = {
    torresBanner:{
        fontWeight: 'bold',
        fontSize: 130,
        fontFamily: 'Brush Script MT', 
        width: '100%',
        textDecoration: 'none'
    },
    dropDown:{
        fontFamily: 'Archivo', 
        display: 'flex',
       color: 'black',
       textDecoration: 'none'
    },
    fullDiv:{
      backgroundColor: 'maroon',
      color: 'white',
      display: 'flex',
      flexDisplay: 'space-between',
      fontWeight: 'bold',
      fontSize: 130,
      fontFamily: 'Archivo', 
      width: '100%',
      textDecoration: 'none'
  }
  }

function Header() {
  return (
<>
  <header class="sticky-top" style={header.fullDiv}>
    


  <Link to="/" style={header.fullDiv}><h1 style={header.fullDiv}>Torres Time </h1></Link>
                    <div>
                    <DropdownButton variant="dark" id="dropdown-basic-button-dark" title="Do Something" style={header.dropDown}>
                        <Dropdown.Item href="/Timer">Start Workout</Dropdown.Item>
                        <Dropdown.Item href="/Login">Log In</Dropdown.Item>
                        <Dropdown.Item href="/Create">Create Account</Dropdown.Item>
                        <Dropdown.Item href="https://ukfgym.com/" target="_blank">Check out UKF</Dropdown.Item>
                    </DropdownButton>
                    </div>
             
                     
       
              
  
    </header>
    
</>

  );
}

export default Header;