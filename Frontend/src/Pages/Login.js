/*
Login is is a component that renders a help box and a user input box on the screen. 
When a user enters their username and password, the data is sent to the server, and a
response is returned with whether the login credentials matched an account. 

authors: C Brandt, E Gitlin, M Klien
reference: https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/
https://redux.js.org/usage/troubleshooting
https://www.digitalocean.com/community/tutorials/how-to-manage-state-in-react-with-redux
*/
import React, { useState } from "react";
import { baseServerURL } from "../constants";
import {useDispatch} from "react-redux";
import {changeStatus} from "../store/loggedIn/loggedIn";

const Login = (props) =>{
    
    const [error,setError] = useState("If there is a problem with your login attempt, it may appear here!");
    //variable to determine whether login is successful. This is a required value to update global state
    const [success,setSuccess] = useState(false);
    const dispatch = useDispatch();

    //side panel on the right of the page to display messages
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

    //once the user enters infor and hits submit, this function runs
    const handleSubmit = ()=> {
        //get the input from text boxes
        var inputEmail = document.getElementById("email").value
        var inputPassword = document.getElementById("password").value
        //use input to make a user object
        const checkUser = {
            email: inputEmail,
            password: inputPassword
        };
        //set up for HTTP request
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
                    setSuccess(true)
                }
                else{
                    setError("Incorrect username or password.")
                    setSuccess(false)
                }
            });
        //update the store after login hs been confirmed successful or not
        dispatch(changeStatus(success));
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
