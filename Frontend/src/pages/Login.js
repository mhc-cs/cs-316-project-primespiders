import React, { useState } from "react";

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
        var inputEmail = document.getElementById("email").value
        var inputPassword = document.getElementById("password").value
        const checkUser = {
            email: inputEmail,
            password: inputPassword
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(checkUser),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        };
        fetch(`http://localhost:9000/users/authenticate`, options)
            .then(data => {
                console.log(data)
                return data.json();
            })
            .then(auth => {
                console.log(auth)
            });
        props.setPage(1)
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