import React, { useState } from "react";



// SetupAccount is the account setup page. 
// It has a form for entering the pin to begin account setup. 
// If the pin is correct, the form should update to a full account setup page
//TODO: Create Account setup component

const SetupAccount = (props) => {

    const [page, setPage] = useState(0);
    const [error,setError] = useState("If there is a problem with your login attempt, it may appear here!");
    console.log("page:",page)

    function getConditionalContent(page, setPage) {
        switch (page) {
        case 0:
            return (
            <div>
                <PinEnter setPage= {() => setPage(1)}/>
            </div>)
        case 1:
            return <EnterInfo setPage= {() => setPage(2)}/>;
        default:
            return <div>Sorry no account 4 u :(</div>;
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
            setError("oh no it didn't work!")
            setPage(1)
        }
        return(
            <div>
                <p>
                Enter your 5 digit activation pin to begin the account creation process
                </p>
                    <form>
                        <label for="fname">Pin: </label>
                        <input type="text" id="fname" name="fname"></input>
                        <br></br><br></br>
                    </form>
                    <button onClick = {() => handleSubmit()}>Submit</button>
            </div>
        );
    }

    const EnterInfo = () =>{
        const handleSubmit = ()=>{

            setPage(1)
        }
        return(
            <div className >
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