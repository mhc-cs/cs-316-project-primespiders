//demo code from https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
//import dotenv from 'dotenv';

class App extends Component{
  constructor(props){
  super(props);
  this.state = { apiResponse: "" };
  }
  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({apiResponse: res}))
  //     .catch(err => err);
  // }

  callUserAPI() {
    fetch("http://localhost:9000/users/get")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    // this.callAPI();
    this.callUserAPI()
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <img src={logo} className="App-logo" alt ="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-title">{this.state.apiResponse}</p>
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
