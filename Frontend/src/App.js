//demo code from https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

import React, { Component } from "react";
import './App.css';
import{ Routes, Route} from "react-router-dom";
import SetupAccount from './Pages/SetupAccount.js'
import Login from './Pages/Login'
import LandingPage from './Pages/LandingPage.js'
import Layout from './Pages/Layout.js'
import MentorSearch from './Pages/MentorSearch'
import {CommunityResources, Staff, MissionStatement, Donate, Volunteer, NoPage, Contact, OurModel} from "./Pages/StaticPages";
//import ConnectWithMentors from "./Pages/ConnectWithMentors"; add this later

import flower from "./Flower-black.png"
import Footer from './Pages/Footer.js'
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
    return(
      <div className="App" >
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LandingPage />} />
          <Route path="/Donate" element={<Donate/>} />
          <Route path="/Volunteer" element={<Volunteer/>} />
          <Route path="/CommunityResources" element={<CommunityResources/>} />
          <Route path="/MissionStatement" element={<MissionStatement />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="/ConnectWithMentors" element={<MentorSearch/>} />
          *<Route path="/OurModel" element={<OurModel/>} />
          <Route path="/Contact" element ={<Contact/>} />
          <Route path="/LogIn" element = {<Login/>} />
          <Route path="/SetUpAccount" element ={<SetupAccount/>} />
          <Route path = "*" element={<NoPage/>} />
        </Route>
      </Routes>
      </div>
    );
  }
}

export default App;
