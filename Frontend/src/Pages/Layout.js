import React from "react";
import flower from "../Flower-black.png"
import {Outlet, Link} from "react-router-dom";
import Footer from "./Footer"
//import Checkbox from '@mui/material/Checkbox';

const NavBar = (props) =>{
    const about = ["Mission Statment", "Staff", "Our Model"];
    const aboutLinks = ["/MissionStatement", "/Staff", "/OurModel"];
    const clients = ["Community Resources", "Connent with Mentors"];
    const clientLinks = ["/CommunityResources", "/ConnectWithMentors"];
    const getInvolved = ["Donate", "Volunteer", "Contact"];
    const involvedLinks = ["/Donate", "/Volunteer", "/Contact"];
    const account = ["Login", "Create Account"];
    const accountLinks = ["/Login", "/SetupAccount"];
    return (
        <>
        <header className="App-Header">

            <h1 className="App-title">Recovery Ventures</h1>
            <div class = "navbar">
                <Link to={"/"}><img className = "navbar-item" src = {flower}/></Link>
                <DropDown name = "Your Account" items = {account} links = {accountLinks}/>
                <DropDown name = "About" items = {about} links = {aboutLinks}/>
                <DropDown name = "Clients" items = {clients} links = {clientLinks}/>
                <DropDown name = "Get involved" items = {getInvolved} links = {involvedLinks}/>
            </div>
        </header>
    <Outlet />
          <Footer></Footer>
    </>
    );
}

const DropDown = (props) =>{
   //remember to do name and items and links
    return(
        <div className = "dropdown navbar-item">
            <button class= "dropbtn">
                {props.name}
            </button>
            <div className = "dropdown-content">
                {
                props.items.map((item, i) => {
                return (<Link key={i} to={props.links[i]}>{item}</Link>)
                })
                }
            </div>
        </div>
    );
}

export default NavBar;