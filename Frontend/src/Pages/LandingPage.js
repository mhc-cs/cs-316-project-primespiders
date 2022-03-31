import React, { Component } from "react";

const LandingPage = (props) => {
    return (
        <div className = "landingPage">

            <h3>About</h3>
            <ul>
                <li>Mission Statement</li>
                <li>Staff</li>
                <li>Our Model</li>
            </ul>
            <h3>Clients</h3>
            <ul>
                <li>Community Resources</li>
                <li>Connent with Mentors</li>
            </ul>
            <h3>Get Involved</h3>
            <ul>
                <li>Donate</li>
                <li>Volunteer</li>
                <li>Contact</li>
            </ul>
            {/* Later change this to conditional 
            rendering based on if the person is logged in */}
            <h3>Account Setup</h3>
            <ul> 
                <li>Setup Acccount</li>
                <li>Log In</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}


export default LandingPage