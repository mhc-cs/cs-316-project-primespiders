//demo code from https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

import React, { Component } from "react";
//import logo from './Flower-transparent.png'
import './App.css';
//import dotenv from 'dotenv';

import LandingPage from './Pages/LandingPage.js'
import SetupAccount from './Pages/SetupAccount.js'

class App extends Component{
  constructor(props){
  super(props);
  this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI/hello")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);

    fetch("http://localhost:9000/")
    .then((res)=> {console.log(res)});
  }
  // componentDidMount() {
  //   this.callAPI();
  // }

  handleHello(){
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1 className="App-title">Recovery Co-op</h1>
          <button onClick = {() => {this.callAPI()}}>Say Hello!</button>
          <h2 className="App-title">{this.state.apiResponse}</h2>
        </header>
        {/* <LandingPage/> */}
        <SetupAccount/>
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