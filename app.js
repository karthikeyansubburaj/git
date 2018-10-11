import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import './App.css';
import Profilecomponent from './Profile'
import Createcomponent from './Create'
import Homecomponent from './Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sterling Software</h1>
        </header>
        
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Create">Create</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
          
        </ul>
        <Router>
        <Route path="/" component={Homecomponent}/>
        <Route path="/Create" component={Createcomponent}/>
        <Route path="/Profile" component={Profilecomponent}/>
        
        </Router>
      </div>
           
         
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;

