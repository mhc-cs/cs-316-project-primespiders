/* The Footer is a component that is rendered at the bottom of the website 
with some basic info about Recovery Ventures*/


import React from "react";
const Footer = (props) => {
    const address = "123 Workers Road, South Hadley, MA"
    const email = "contactus@email.com"
    const phone = "(555) - 555- 5555"
    return(
        <div className = "footer">
            <div class="row">
                <div class="col">{address}</div>  
                <div class="col">{email}</div>  
                <div class="col">{phone}</div>  
            </div> 
        </div>
    );
}
export default Footer;