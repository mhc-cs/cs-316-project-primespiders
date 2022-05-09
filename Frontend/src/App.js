/*
App.js is ...

authors: C Brandt, M Klien, and E Gitlin
*/

import React, { Component, useState} from "react";
import './App.css';
import{ Routes, Route} from "react-router-dom";
import SetupAccount from './Pages/SetupAccount.js'
import Login from './Pages/Login'
import LandingPage from './Pages/LandingPage.js'
import Layout from './Pages/Layout.js'
import MentorSearch from './Pages/MentorSearch'
import {CommunityResources, Staff, MissionStatement, Donate, Volunteer, NoPage, Contact, OurModel} from "./Pages/StaticPages";



function App(props){
  const [loggedIn, setLoggedIn] = useState();

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
        <Route path="/OurModel" element={<OurModel/>} />
        <Route path="/Contact" element ={<Contact/>} />
        <Route path="/LogIn" element = {<Login/>} />
        <Route path="/SetUpAccount" element ={<SetupAccount/>} />
        <Route path = "*" element={<NoPage/>} />
      </Route>
    </Routes>
    </div>
  );
}


export default App;
