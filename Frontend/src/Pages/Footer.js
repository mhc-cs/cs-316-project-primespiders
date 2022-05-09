/*
Footer to display at bottom of the page with contact information 
*/

import React from "react";
const Footer = (props) => {
    //use hardcoded contact information 
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