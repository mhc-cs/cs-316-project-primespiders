//demo code from https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
//Routing and layout template based on W3schools demo https://www.w3schools.com/react/react_router.asp

import React, { Component } from "react";
import './App.css';
import{ Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MissionStatement from "./pages/MissionStatement";
import Staff from "./pages/Staff";
import OurModel from "./pages/OurModel";
import CommunityResources from "./pages/CommunityResources";
import ConnectWithMentors from "./pages/ConnectWithMentors";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Staff";
import SetUpAccount from "./pages/SetUpAccount";
import LogIn from "./pages/LogIn";
import NoPage from "./pages/NoPage";

class App extends Component{
  constructor(props){
  super(props);
  this.state = { apiResponse: "" };
  }

  //this was from the demo, I'm keeping it to adapt from when we start using fetch commands
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

  //handleHello(){
  //  this.callAPI();
  //}

  render() {
    return (
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/MissionStatement" element={<MissionStatement />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="/OurModel" element={<OurModel/>} />
          <Route path="/CommunityResources" element={<CommunityResources/>} />
          <Route path="/ConnectWithMentors" element={<ConnectWithMentors/>} />
          <Route path="/Donate" element={<Donate/>} />
          <Route path="/Volunteer" element={<Volunteer/>} />
          <Route path="/Contact" element ={<Contact/>} />
          <Route path="/SetUpAccount" element ={<SetUpAccount/>} />
          <Route path="/LogIn" element = {<LogIn/>} />
          <Route path = "*" element={<NoPage />} />
          </Route>
        </Routes>
    );
  }
}

export default App;