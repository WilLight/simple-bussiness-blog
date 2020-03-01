import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import About from './components/about';
import Contact from './components/contact';
import Newsfeed from './components/newsfeed';
import SignUp from './components/signup';

import logo from './logo.svg';
import './index.css';

//import * as serviceWorker from './serviceWorker';


function DocTop(props) {
  //Firebase
  const config = {
    apiKey: "AIzaSyBPeYMyccs8PXV7homyNy5EI8UtNWwFVtw",
    authDomain: "akcent-energy.firebaseapp.com",
    databaseURL: "https://akcent-energy.firebaseio.com",
    projectId: "akcent-energy",
    storageBucket: "akcent-energy.appspot.com",
    appId: "1:554832520435:web:eff6d9fa41b33fff648386"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }

  //Menu opening
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  //Field Value
  const [userName, setUserName] = React.useState('');
  const [email, emailLogin] = React.useState('');
  const [password, passwordLogin] = React.useState('');

  const handleLoginClick = () => {
    const auth = firebase.auth();
    //Sign in
    const loginpromise = auth.signInWithEmailAndPassword(email,password);
    loginpromise
      .catch(e => console.log(e.message));
  };
  const handleLogoutClick = () => {
    //Sign out
    firebase.auth().signOut();
    setUserName('');
  }
  //Realtime Listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      setUserName(firebaseUser.email);
      console.log(firebaseUser);
    } else {
      console.log('user is not logged in');
    }
  });

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
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="Menu-wrapper">
              <Button
                className="Document-top-button"
                onClick={handleClick}
              >
                ...
              </Button>
              {open ? (
                <div className="Menu-body">
                  {userName ? (
                    <div>
                      <div>
                        {userName}
                      </div>
                      <Button
                        className="Menu-button"
                        onClick={handleLogoutClick}
                      >
                        Log Out
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <TextField
                        className="Menu-field"
                        id="email-login"
                        label="Email"
                        value={email}
                        onChange={(e) => emailLogin(e.target.value)}
                        margin="normal"
                      />
                      <TextField
                          className="Menu-field"
                          id="password-login"
                          label="Password"
                          value={password}
                          onChange={(e) => passwordLogin(e.target.value)}
                          margin="normal"
                      />
                      <Button
                        className="Menu-button"
                        onClick={handleLoginClick}
                      >
                        Log In
                      </Button>
                      <Link to = "/testing/" className="Menu-button-link">
                        <Button
                          className="Menu-button"
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                  
                  
                </div>
              ) : null}
            </div>
          </ClickAwayListener>
        </div>
      </div>
    );
  }


class Bussiness extends React.Component {
    constructor(props) {
        super(props);
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
                    <Route path="/testing/" component={SignUp} />
                
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