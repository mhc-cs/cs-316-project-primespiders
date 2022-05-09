/*
App.js is part of the entrance to the site, and identifies connections between different url paths and the 
pages they should lead to

authors: C Brandt, M Klien, and E Gitlin
*/
//initial demo code from https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
//Create react app tutorial: https://blog.logrocket.com/getting-started-with-create-react-app-d93147444a27/ 
//routing references: https://www.w3schools.com/react/react_router.asp

import './App.css';
import{ Routes, Route} from "react-router-dom";
import SetupAccount from './Pages/SetupAccount.js'
import Login from './Pages/Login'
import LandingPage from './Pages/LandingPage.js'
import Layout from './Pages/Layout.js'
import MentorSearch from './Pages/MentorSearch'
import {CommunityResources, Staff, MissionStatement, Donate, Volunteer, NoPage, Contact, OurModel} from "./Pages/StaticPages";

function App(props){

  //the layout element matches the / path, which every valid path begins with. This inserts common elements on every
  //page, such as the navigation bar and footer. Other routes add additional elements for cotent. 
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
