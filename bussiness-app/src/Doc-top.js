import React from 'react';
import logo from './logo.svg';
import  { Button } from '@material-ui/core';
import './Doc-top.css';


function DocTop() {

  return (
    <div id="Document-top-container">
      <img src={logo} id="Company-logo" alt="logo" />
      <p id="Document-top-text">
        Company Name
      </p>
      <div className="Document-top-buttons">
        <Button
          
          className="Document-top-button"
        >
          Home
        </Button>
        <Button
          className="Document-top-button"
        >
          Gallery
        </Button>
        <Button
          className="Document-top-button"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default DocTop;
