import React from "react";
import flower from "../Flower-black.png"
import {Outlet, Link} from "react-router-dom";
//import Checkbox from '@mui/material/Checkbox';

const NavBar = (props) =>{
    const about = ["Mission Statment", "Staff", "Our Model"];
    const aboutLinks = ["/MissionStatement", "/Staff", "/OurModel"];
    const clients = ["Community Resources", "Connent with Mentors"];
    const clientLinks = ["/CommunityResources", "/ConnectWithMentors"];
    const getInvolved = ["Donate", "Volunteer", "Contact"];
    const involvedLinks = ["/Donate", "/Volunteer", "/Contact"];
    return (
        <>
        <header className="App-Header">

            <h1 className="App-title">Recovery Ventures</h1>
          {/* <button onClick = {() => {this.callAPI()}}>Say Hello!</button>
          <h2 className="App-title">{this.state.apiResponse}</h2> */}
           {/* <Checkbox className = "check"
            checked={this.state.loggedIn}
            onChange={this.handleLoginChange}
            inputProps={{ 'aria-label': 'controlled' }}
          /> */}
            <div class = "navbar">
                <Link to={"/"}><img className = "navbar-item" src = {flower}/></Link>
                <DropDown name = "About" items = {about} links = {aboutLinks}/>
                <DropDown name = "Clients" items = {clients} links = {clientLinks}/>
                <DropDown name = "Get involved" items = {getInvolved} links = {involvedLinks}/>
            </div>
        </header>
    <Outlet />
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