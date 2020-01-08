import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  { Button } from '@material-ui/core';

import About from './components/about';
import Contact from './components/contact';
import Newsfeed from './components/newsfeed';
import Testing from './components/testing';

import logo from './logo.svg'
import './index.css';
//import * as serviceWorker from './serviceWorker';


function DocTop() {
    return (
      <div id="Document-top-container">
        <img src={logo} id="Company-logo" alt="logo" />
        <div className="Document-top-buttons">
          <Link to = "/" className="Button-link">
            <Button
              className="Document-top-button"
            >
              Home
            </Button>
          </Link>
          <Link to = "/newsfeed/" className="Button-link">
            <Button
              className="Document-top-button"
            >
              Newsfeed
            </Button>
          </Link>
          <Link to = "/contact/" className="Button-link">
            <Button
              className="Document-top-button"
            >
              Contact Us
            </Button>
          </Link>
          <Link to = "/testing/" className="Button-link">
            <Button
              className="Document-top-button"
            >
              Testing
            </Button>
          </Link>
        </div>
      </div>
    );
  }


class Bussiness extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="document">
            <Router>
                <div className="document-top">
                    <DocTop />
                </div>
                <div className="document-body">
                
                    <Route path="/" exact component={About} />
                    <Route path="/newsfeed/" component={Newsfeed} />
                    <Route path="/contact/" component={Contact} />
                    <Route path="/testing/" component={Testing} />
                
                </div>
                <div id='footer'>
                </div>
            </Router>
            </div>
        )
        
        
    }
}



ReactDOM.render( <Bussiness /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();