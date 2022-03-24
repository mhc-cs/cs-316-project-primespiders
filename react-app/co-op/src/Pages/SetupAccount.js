import React, { Component } from "react";

// SetupAccount is the account setup page. 
// It has a form for entering the pin to begin account setup. 
// If the pin is correct, the form should update to a full account setup page
//TODO: Create Account setup component
const SetupAccount = (props) => {
    return (
        <div className = "setupAccount">
            <h3>Account Creation</h3>
            <div className = "contentBox1">
            <p>
            Enter your 5 digit activation pin to begin the account creation process
            </p>
                <form>
                    <label for="fname">Pin: </label>
                    <input type="text" id="fname" name="fname"></input>
                    <br></br><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}


export default SetupAccount