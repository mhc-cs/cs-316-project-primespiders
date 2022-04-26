import React from "react";
import bioBoxImg from "../bioBox.png"

const LandingPage = (props) => {
    return(
        <div className = "landingPage">
            <div className = "banner">
                {/* <img src = "https://www.verywellmind.com/thmb/zdRkgcbRRQNDvHTaptaRuCS2xos=/1000x1000/smart/filters:no_upscale()/going-back-to-the-office-after-COVID-19_nologo-d4040d1ceb584adc840ba412d2d6056c.png"></img> */}
                <img src = "https://www.rimage.com/apac/wp-content/uploads/sites/4/2016/02/Two-Business-People-Talking-Banner-1.png"></img>
                <div className = "cover"></div>
            </div>
            <div className = "d1">
                <h1>Welcome to Recovery Ventures</h1>
                <h4>A place for you to dive back into what you love</h4>
            </div>
            <div className = "d2">
                <img src = "https://static.vecteezy.com/system/resources/thumbnails/004/828/252/small_2x/4-people-join-forces-the-concept-of-hand-to-hand-to-create-unity-group-of-people-hands-teamwork-business-group-by-reaching-out-in-a-circle-the-power-of-work-is-friendship-with-business-colleagues-photo.jpg"></img>
                <p>Recovery Ventures is a collaboratively governed nonprofit dedicated to supporting people 
                with histories of mental illness or addiction in the pursuit of their career goals.  
                Empowered by a network of volunteer community professionals, we are proud to offer a fully customized pathway 
                to self-employment and self-determination.</p>
            </div>
            <div className = "d3">
                <h4>“I could never have pictured myself here a year ago.  
                    Most people hear ‘self employment’ and think of an impossible 
                    process.  My advice to them is just to try it.  
                    Recovery Co-op is filled with supportive mentors, staff, and 
                    peers, and my self-confidence has grown so much.”  
                    <br></br>
                        <h6>
                            – LM, Co-op Member and Owner of Painting Pelicans LLC
                        </h6>
                    </h4>
            </div>
            <div className = "d2">
                
                <h1>Connect with Professionals in Your Field!</h1>
                <img src = {bioBoxImg}></img>
            </div>



            {/* <h3>About</h3>
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
            <h3>Account Setup</h3>
            <ul> 
                <li>Setup Acccount</li>
                <li>Log In</li>
                <li>Contact</li>
            </ul> */}
        </div>
    );
}


export default LandingPage;