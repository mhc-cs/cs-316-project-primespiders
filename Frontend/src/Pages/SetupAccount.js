import React, { useState, useEffect } from "react";



// SetupAccount is the account setup page.
// It has a form for entering the pin to begin account setup.
// If the pin is correct, the form should update to a full account setup page
//TODO: Create Account setup component

const SetupAccount = (props) => {

    const [page, setPage] = useState(0);
    const [error, setError] = useState("If there is a problem with your login attempt, it may appear here!");
    console.log("page:",page)
    const [account, setAccount] = useState("client");
    const [user, setUser] = useState("NULL");

    // useEffect(() => {
    //     setupFillerBios();
    // }, []);

    function getConditionalContent(page, setPage) {
        switch (page) {
        case 0:
            return (
            <div>
                <PinEnter setPage= {() => setPage(1)}/>
            </div>)
        case 1:
            return <EnterInfo setPage= {() => setPage(3)}/>;
        case 2:
            return <BioEnter setPage= {() => setPage(3)}/>;
        default:
            return <div>Account created!</div>;
        }
    }

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

    const PinEnter = (props) =>{
        const handleSubmit = ()=>{
            //get the pin from the input field
            var inputNum = document.getElementById("pin").value;
            //GET request to find a pin with this number
            fetch(`http://localhost:9000/pins/${inputNum}`)
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

    const EnterInfo = () =>{
        const handleSubmit = ()=>{
            //https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/
            //get the input from the text boxes
            var inputEmail = document.getElementById("email1").value
            var inputPassword = document.getElementById("password").value
            var inputFName = document.getElementById("fname").value
            var inputLName = document.getElementById("lname").value
            //create a user to add
            const newUser = {
                email: inputEmail,
                password: inputPassword,
                firstName: inputFName,
                lastName: inputLName,
                accountType: account,
                bioIndex: 0
            };
            //set up for the post request
            const options = {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            };
            //POST request to add new user to db
            fetch(`http://localhost:9000/users`, options)
                .then(data => {
                    console.log(data)
                    return data.json();
                })
                .then(update => {
                    //if the account type is client, set up is done
                    console.log(update);
                    setUser(inputEmail);
                    //if account type is mentor, redirect to the bio entry page
                    if(account == "mentor") {
                        setPage(2)
                    }
                    else setPage(3)
                });
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
        fetch(`http://localhost:9000/bios`, options)
            .then(data => {
                return data.json();
            })
            .then(bio => {
                if(bio.id) {
                    //update this users bioIndex attribute to match the new bio
                    const updateUser = {
                        bioIndex: bio.id
                    };
                    const options = {
                        method: 'PUT',
                        body: JSON.stringify(updateUser),
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    };
                    fetch(`http://localhost:9000/users/${user}`, options)
                        .then(data => {
                            return data.json();
                        })
                    setPage(3)
                }
                else setError("Error entering bio.")
            });
    }

    //hardcoded function to add bios to the db 
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
    
    const BioEnter = (props) =>{
        const handleSubmit = ()=>{
            var inputBio = document.getElementById("bio").value;
            var inputName = document.getElementById("name").value
            var inputLocation = document.getElementById("location").value
            var inputExpertise = document.getElementById("expertise").value
            var inputContact = document.getElementById("contact").value
            var inputImage = document.getElementById("image").value
            const newBio = {
                bio: inputBio,
                name: inputName,
                location: inputLocation,
                expertise: inputExpertise,
                contact: inputContact,
                image: inputImage
            };
            addBio(newBio)
            //setError("oh no it didn't work!")
            //setPage(1)
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
                        <input type="text" id="expertise" name="expertise"></input>
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
        <div className = "setupAccount basicPage">
            <h3>Account Creation</h3>
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
