/*
The Login page allows users to login by entering their username and password.
reference: https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/
*/
import React, { useState } from "react";

const Login = (props) =>{
    const [error,setError] = useState("If there is a problem with your login attempt, it may appear here!");

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
        fetch(`http://localhost:9000/users/authenticate/`, options)
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
        <div className = "login basicPage">
            <h3>Login</h3>
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
