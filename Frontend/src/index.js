import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{ BrowserRouter, Routes, Route} from "react-router-dom";
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
import LogIn from "./pages.LogIn";
import NoPage from "./pages/NoPage";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="MissionStatement" element={<MissionStatement />} />
          <Route path="Staff" element={<staff />} />
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
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
