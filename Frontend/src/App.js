//demo code from https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

import React, { Component } from "react";
import './App.css';

//import dotenv from 'dotenv';

import SetupAccount from './pages/SetupAccount.js'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage.js'
import Navbar from './pages/Navbar.js'
import flower from "./Flower-black.png"
import Footer from './pages/Footer.js'
import Checkbox from '@mui/material/Checkbox';

class App extends Component{
  constructor(props){
  super(props);
  this.state = {
    apiResponse: "",
    loggedIn: false,
  };
  }

  handleLoginChange = (event) =>{
    this.setState({loggedIn: event.target.checked})
    console.log(this.state.loggedIn);
  }

  render() {
    return (
      <div className="App" >
        <header className="App-Header">

            <h1 className="App-title">Recovery Ventures</h1>
          {/* <button onClick = {() => {this.callAPI()}}>Say Hello!</button>
          <h2 className="App-title">{this.state.apiResponse}</h2> */}
           {/* <Checkbox className = "check"
            checked={this.state.loggedIn}
            onChange={this.handleLoginChange}
            inputProps={{ 'aria-label': 'controlled' }}
          /> */}
          <Navbar/>

        </header>
        {/* <LandingPage/> */}
        <SetupAccount/>
        <Footer/>
      </div>
    );
  }

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
