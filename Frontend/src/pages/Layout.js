//Routing and layout template based on W3schools demo https://www.w3schools.com/react/react_router.asp
import React, { Component, useLayoutEffect } from "react";
import {Outlet, Link} from "react-router-dom";


class Layout extends Component {
    render(){
    return (
        <>
        <nav>
            <div id="Home">
                <h3><Link to="/">Home</Link></h3>
            </div>
            <div id="About">
                <h3>About</h3>
                <ul>
                    <li><Link to="/MissionStatement">Mission Statement</Link></li>
                    <li><Link to="/Staff">Staff</Link></li>
                    <li><Link to="/OurModel">Our Model</Link></li>
            </ul>
            </div>
            <div id ="Clients">
                <h3>Clients</h3>
                <ul>
                    <li><Link to="/CommunityResources">Community Resources</Link></li>
                    <li><Link to="/ConnectWithMentors">Connect With Mentors</Link></li>
                </ul>  
            </div>
            <div id="Involvement">
                <h3>Get Involved</h3>
                <ul>
                    <li><Link to="/Donate">Donate</Link></li>
                    <li><Link to="/Volunteer">Volunteer</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div id="Account">
                {/* Later change this to conditional 
            rendering based on if the person is logged in */}
            <h3>Account Setup</h3>
            <ul>  
                <li><Link to="/SetUpAccount">Set Up Account</Link></li>
                <li><Link to="/LogIn">Log In</Link></li>
            </ul>
            </div> 
        </nav>

        <Outlet />
        </>
    );
    }
}


export default Layout;