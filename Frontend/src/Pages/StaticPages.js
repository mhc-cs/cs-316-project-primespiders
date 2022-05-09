/*
StaticPages has all of the simple text based pages that we 
use on our website besides from the landing page. They all have basic
info pertaining to the organization. Several of these pages only have stand-in text for now.
Authors: C Brandt and E Gitlin
*/

import React from "react";

export const MissionStatement = (props) => {
    return (
        <div className = "basic-page">
            <h3>Mission Statement</h3>
        </div>
    );
}

export const OurModel = (props) => {
    return (
        <div className = "basic-page">
            <div className = "d1">
                <h1>About Our Collaborative Governance Model</h1>
            </div>
            <div className = "d2">
                <p>Recovery Ventures exists to serve YOU, so it only makes sense that this mission extends to the boardroom.  All staff and clients hold equal governing power, and all are responsible for making key decisions on issues such as hiring, fiscal management, and program planning.  We value transparency and accessibility in this process, and strive to provide opportunities for clients to assume leadership roles.</p>
            </div>
        </div>
    );
}

export const Staff = (props) => {
    return (
        <div className = "basic-page">
            <h3>Staff</h3>
        </div>
    );
}

export const CommunityResources = (props) => {
    return (
        <div className = "basic-page">
            <h3>Community Resources</h3>
        </div>
    );
}

export const Donate = (props) => {
    return (
        <div className = "basic-page">
            <h3>Donate</h3>
        </div>
    );
}

export const Volunteer = (props) => {
    return (
        <div className = "split-page basic-page">
           <div >
                <h1>Volunteer</h1>
            </div>
            <div className = "grid">
                <div>
                <p>We have many Volunteer opportunities for you!</p>
                <ol>
                    <li>Work with Clients</li>
                    <li>Help us maintain our site</li>
                    <li>Be a mentor</li>
                    <li>Help us with outreach</li>
                </ol>
                </div>
                <img src = "https://www.signupgenius.com/cms/images/business/volunteering-ideas-tips-business-article-600x400.jpg"></img>
            </div>


        </div>

    );
}

export const Contact = (props) => {
    return (
        <div className = "basic-page">
            <h3>
                <a href = "https://datatracker.ietf.org/doc/html/rfc1149">Contact us!</a>
            </h3>
        </div>
    );
}

export const NoPage = (props) => {
    return (
        <div className = "basic-page">
            <h3>404: Page not found</h3>
        </div>
    );
}


// export default MissionStatement
// export default Staff
// export default CommunityResources
// export default Donate
// export default Volunteer
// export default Contact