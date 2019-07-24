import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  { Button } from '@material-ui/core';

import About from './components/about';
import Contact from './components/contact';
import Newsfeed from './components/newsfeed';

import logo from './logo.svg'
import './index.css';
//import * as serviceWorker from './serviceWorker';


function DocTop() {
    return (
      <div id="Document-top-container">
        <img src={logo} id="Company-logo" alt="logo" />
        <p id="Document-top-text">
          Company Name
        </p>
        <div className="Document-top-buttons">
          <Link to = "/">
            <Button
  
              className="Document-top-button"
            >
              Home
            </Button>
          </Link>
          <Link to = "/newsfeed/">
            <Button
              className="Document-top-button"
            >
              Gallery
            </Button>
          </Link>
          <Link to = "/contact/">
            <Button
              className="Document-top-button"
            >
              Contact Us
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