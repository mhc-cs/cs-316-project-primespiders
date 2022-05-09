/*
SetupAccount is the account setup page. It has a form for entering the pin to begin account setup.
If the pin is correct, the form should update to a full account setup page. in the function
getConditionalContent, you can view the order of conditional rendering based on the current value of 
the page variable.
reference: https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/
*/

import React, { useState, useEffect } from "react";
import {baseServerURL} from "../constants.js";

const SetupAccount = (props) => {

    //set up variables necessary for the page
    const [page, setPage] = useState(0);
    const [error, setError] = useState("If there is a problem with your login attempt, it may appear here!");
    console.log("page:",page)
    const [account, setAccount] = useState("client");
    const [user, setUser] = useState("NULL");

    // useEffect(() => {
    //     setupFillerBios();
    // }, []);

    //controls which page elements are displayed
    function getConditionalContent(page, setPage) {
        switch (page) {
        case 0:
            //original display: prompt for the user to enter pin
            return (
            <div>
                <PinEnter setPage= {() => setPage(1)}/>
            </div>)
        case 1:
            //second display: prompt for the user to enter account information
            return <EnterInfo setPage= {() => setPage(3)}/>;
        case 2:
            //(optional) mentor display: prompt for the mentor to enter profile information
            return <BioEnter setPage= {() => setPage(3)}/>;
        default:
            //final display: notify the user the account creation was a success
            return <div>Account created!</div>;
        }
    }

    //side panel on the right of the page to display messages
    const HelpBox = (props) =>{
        return(
            <div className = "content-box1">
                <h3>
                Information about how to set up your account in will appear below!
                </h3>
                <p>
                    {error}
                </p>
            </div>
        );
    }

    //PinEnter renders the pin prompt 
    const PinEnter = (props) =>{
        
        //once the user enters pin and hits submit, this function runs
        const handleSubmit = ()=>{
            //get the pin from the input field
            var inputNum = document.getElementById("pin").value;
            //GET request to find a pin with this number
            fetch(`${baseServerURL}/pins/${inputNum}`)
                .then(data => {
                    return data.json();
                })
                .then(pin => {
                    //store the account type associated with the pin
                    if(pin.account) {
                        setAccount(pin.account);
                        setPage(1)
                    }
                    //or if there is no associated account type, alert the user to error
                    else setError("Invalid pin. Please check for errors.")
                });
        }
        return(
            <div>
                <p>
                Enter your 5 digit activation pin to begin the account creation process
                </p>
                    <form>
                        <label for="fname">Pin: </label>
                        <input type="text" id="pin" name="pin"></input>
                        <br></br><br></br>
                    </form>
                    <button onClick = {() => handleSubmit()}>Submit</button>
            </div>
        );
    }

    //adds a given user to the database (requires parameter: user to add)
    const addUser = (newUser) =>{
        //set up for the post request
        const options = {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        };
        //POST request to add new user to db
        fetch(`${baseServerURL}/users/`, options)
            .then(data => {
                return data.json();
            })
            .then(update => {
                //if the account type is client, set up is done
                setUser(newUser['email']);
                //if account type is mentor, redirect to the bio entry page
                if(account == "mentor") {
                    setPage(2)
                }
                else setPage(3)
            });
    }

    //EnterInfo is a component with user inputs for account creation
    const EnterInfo = () =>{

        //once the user enters info and hits submit, this function runs
        const handleSubmit = ()=>{
            //get the input from the text boxes
            var inputEmail = document.getElementById("email1").value
            var inputPassword = document.getElementById("password").value
            var inputFName = document.getElementById("fname").value
            var inputLName = document.getElementById("lname").value
            //check to make sure email matches both times its entered
            if(inputEmail != document.getElementById("email2").value){
                setError("Emails do not match.")
            }
            //make sure that email, password, and name fields are not empty
            else if (!inputEmail){
                setError("Please enter an email address.")
            }
            else if (!inputPassword){
                setError("Please enter a password.")
            }
            else if (!inputFName || !inputLName){
                setError("Please enter your name.")
            }
            else {
                //make sure this email isn't already in use
                fetch(`${baseServerURL}/users/${inputEmail}`)
                .then(data => {
                    return data.json();
                })
                .then(update => {
                    //if the email is already used, let the user know
                    if(update['email']){
                        setError("Email is already in use.")
                    }
                    else{
                        setError(" ")
                        //create a user to add
                        const newUser = {
                            email: inputEmail,
                            password: inputPassword,
                            firstName: inputFName,
                            lastName: inputLName,
                            accountType: account,
                            bioIndex: 0
                        };
                        addUser(newUser)
                    }
                });
            }
        }
        return(
            <div className = "contentBox1">
                <p>Enter your information below</p>
                    <form>
                        <label for="fname">First name: </label>
                        <input type="text" id="fname" name="fname"></input>
                        <br></br><br></br>
                        <label for="lname">Last name: </label>
                        <input type="text" id="lname" name="lname"></input>
                        <br></br><br></br>
                        <label for="email1">Email: </label>
                        <input type="text" id="email1" name="email1"></input>
                        <br></br><br></br>
                        <label for="email2">Re-enter your email: </label>
                        <input type="text" id="email2" name="email2"></input>
                        <br></br><br></br>
                        <label for="password">Password: </label>
                        <input type="text" id="password" name="password"></input>
                        <br></br><br></br>
                    </form>
                    <button onClick = {() => handleSubmit()}>Submit</button>
                </div>
        );
    }


    //addBio is a function that adds a given user to the database 
    //requires parameter: newBio which is an object with the following fields:
    /*
    {
        bio: inputBio,
        name: inputName,
        location: inputLocation,
        expertise: inputExpertise,
        contact: inputContact,
        image: inputImage
    }
    */
    const addBio = (newBio) =>{
        //set up a post request to add the new bio
        console.log(newBio)
        const options = {
            method: 'POST',
            body: JSON.stringify(newBio),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        };
        //POST request adds bio to db
        fetch(`${baseServerURL}/bios`, options)
            .then(data => {
                return data.json();
            })
            .then(bio => {
                if(bio.id) {
                    //update this users bioIndex attribute to match the new bio
                    const updateUser = {
                        bioIndex: bio.id
                    };
                    //set up HTTP request
                    const options = {
                        method: 'PUT',
                        body: JSON.stringify(updateUser),
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    };
                    fetch(`${baseServerURL}/users/${user}`, options)
                        .then(data => {
                            return data.json();
                        })
                    setPage(3)
                }
                else setError("Error entering bio.")
            });
    }

    //hardcoded function to add bios to the db for testing purposes. 
    const setupFillerBios = () => {
        let bio1 = {
        bio: "I am an expert in the field of psychology. I am happy to talk about my experience",
        name: "Lucy Ren",
        location: "Seattle",
        expertise: "Psychology",
        contact: "RenL@gmail.com",
        image: "https://this-person-does-not-exist.com/img/avatar-bb4107109584df2327c5d1fd9940205f.jpg"
        }
        addBio(bio1)

        let bio2 = {
            bio: "What does it mean to be a magician? I am here to talk to you about my life and passions, and hopefully help you get your foot in the magical door",
            name: "John Moralis",
            location: "Chicago",
            expertise: "Magic",
            contact: "Woosh123@gmail.com",
            image: "https://this-person-does-not-exist.com/img/avatar-a2afa9188563d8d4d1adb77df8aed747.jpg"
        }
        addBio(bio2);

        let bio3 = {
            bio: "Have you ever thought about the world of mouse racing? Mouse racing has been my passion since I was a child. I am the head trainer of the humane mouse racing leauge of Arazona",
            name: "Forest Mott",
            location: "Phoenix",
            expertise: "Mouse Racing",
            contact: "MForest@gmail.com",
            image: "https://this-person-does-not-exist.com/img/avatar-0214a5bc0841b536cc6969d679433615.jpg"
        }
        addBio(bio3)
    }

    //BioEnter renders the profile creation user input screen 
    const BioEnter = (props) =>{

        //once the user enters bio info and hits submit, this function runs
        const handleSubmit = ()=>{
            //get the input from the text boxes
            var inputBio = document.getElementById("bio").value;
            var inputName = document.getElementById("name").value
            var inputLocation = document.getElementById("location").value
            var inputExpertise = document.getElementById("expertise").value
            var inputContact = document.getElementById("contact").value
            var inputImage = document.getElementById("image").value
            //create bio object to add
            const newBio = {
                bio: inputBio,
                name: inputName,
                location: inputLocation,
                expertise: inputExpertise,
                contact: inputContact,
                image: inputImage
            };
            addBio(newBio)
        }
        
        return(
            <div>
                <p>
                Please enter your mentor bio information here! This bio will be available for clients to see.
                </p>
                    <form>
                        <label for="fname">Name: </label>
                        <input type="text" id="name" name="name"></input>
                        <br></br><br></br>
                        <label for="fname">Bio: </label>
                        <input type="text" id="bio" name="bio"></input>
                        <br></br><br></br>
                        <label for="fname">Location: </label>
                        <input type="text" id="location" name="location"></input>
                        <br></br><br></br>
                        <label for="fname">Expertise: </label>
                        <select name="expertise" id="expertise">
                            <option value="All">All</option>
                            <option value="Arts">Arts</option>
                            <option value="Business">Business</option>
                            <option value="Education">Education</option>
                            <option value="Medical">Medical</option>
                            <option value="Service-Industry">Service Industry</option>
                            <option value="Technology">Technology</option>
                            <option value="Other">Other</option>
                        </select>
                        <br></br><br></br>
                        <label for="fname">Contact: </label>
                        <input type="text" id="contact" name="contact"></input>
                        <br></br><br></br>
                        <label for="fname">Image: </label>
                        <input type="text" id="image" name="image"></input>
                        <br></br><br></br>
                    </form>
                    <button onClick = {() => handleSubmit()}>Submit</button>
            </div>
        );
    }

    return (
        <div className = "setupAccount basic-page split-page">
            <h1>Account Creation</h1>
            {/* <h4>{page}</h4> */}
            <div className = "grid">
                <div className = "content-box2">
                    {getConditionalContent(page, setPage)}
                </div>
                <HelpBox />
            </div>
        </div>
    );

}






export default SetupAccount
