/*
Login is  page component 
authors: C Brandt and E Gitlin
*/

import React, { useState } from "react";
import { baseServerURL } from "../constants";

//Login is a page to allow the user to login to their account
//The user should enter a username and password
 
const Login = (props) =>{
    const [error,setError] = useState("If there is a problem with your login attempt, it may appear here!");

    const HelpBox = (props) =>{
        return(
            <div className = "content-box1">
                <h3>
                Information about how to login will appear below!
                </h3>
                <p>
                    {error}
                </p>
            </div>
        );
    }

    const handleSubmit = ()=> {
        //https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/
        //get the input from text boxes
        var inputEmail = document.getElementById("email").value
        var inputPassword = document.getElementById("password").value
        //set up for HTTP request
        const checkUser = {
            email: inputEmail,
            password: inputPassword
        };
        const options = {
            method: 'PUT',
            body: JSON.stringify(checkUser),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        };
        //PUT request to authenticate username and password
        fetch(`${baseServerURL}/users/authenticate/`, options)
            .then(data => {
                return data.json();
            })
            .then(auth => {
                //if the login was a success or failure redirect accordingly
                if(auth){
                    setError("Login successful!")
                }
                else{
                    setError("Incorrect username or password.")
                }
            });
    }

    return(
        <div className = "login split-page basic-page">
            <h1>Login</h1>
            <div className = "grid">
                <div className = "content-box2">
                    <p>Enter your information below</p>
                        <form>
                            <label for="email">Email: </label>
                            <input type="text" id="email" name="email"></input>
                            <br></br><br></br>
                            <label for="password">Password: </label>
                            <input type="text" id="password" name="password"></input>
                            <br></br><br></br>
                        </form>
                        <button onClick = {() => handleSubmit()}>Submit</button>
                </div>
                <HelpBox />
            </div>
        </div>
    );
}

export default Login;
