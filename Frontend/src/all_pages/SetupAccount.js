import React, { Component ,useState } from "react";

class SetUpAccount extends Component {
    render(){
      return (<h1>Do account set-up here</h1>);
    }   
  }

// function getConditionalContent(page, setPage) {
//     switch (page) {
//       case 0:
//         return (
//         <div>
//             <PinEnter setPage= {() => setPage(1)}/>
//         </div>)
//       case 1:
//         return <EnterInfo setPage= {() => setPage(2)}/>;
//       default:
//         return <div>Sorry no account 4 u :(</div>;
//     }
//   }
// SetupAccount is the account setup page. 
// It has a form for entering the pin to begin account setup. 
// If the pin is correct, the form should update to a full account setup page
//TODO: Create Account setup component
// const SetupAccount = (props) => {
//     const [page, setPage] = useState(0);
//     console.log("page:",page)
//     return (
//         <div className = "setupAccount">
//             <h3>Account Creation</h3>
//             <h4>{page}</h4>
//             {getConditionalContent(page, setPage)}
//         </div>
//     );
// }
// const PinEnter = (props) =>{
//     const handleSubmit = ()=>{
//         props.setPage()
//     }
//     return(
//         <div className = "contentBox1">
//             <p>
//             Enter your 5 digit activation pin to begin the account creation process
//             </p>
//                 <form >
//                     <label for="fname">Pin: </label>
//                     <input type="text" id="fname" name="fname"></input>
//                     <br></br><br></br>
//                 </form>
//                 <button onClick = {() => handleSubmit()}>Submit</button>
//             </div>
//     );
// }
// const EnterInfo = (props) =>{
//     const handleSubmit = ()=>{
//         props.setPage(1)
//     }
//     return(
//         <div className = "contentBox1">
//             <p>Enter your information below</p>
//                 <form>
//                     <label for="fname">First name: </label>
//                     <input type="text" id="fname" name="fname"></input>
//                     <br></br><br></br>
//                     <label for="lname">Last name: </label>
//                     <input type="text" id="lname" name="lname"></input>
//                     <br></br><br></br>
//                     <label for="email1">Email: </label>
//                     <input type="text" id="email1" name="email1"></input>
//                     <br></br><br></br>
//                     <label for="email2">Re-enter your email: </label>
//                     <input type="text" id="email2" name="email2"></input>
//                     <br></br><br></br>
//                     <label for="password">Password: </label>
//                     <input type="text" id="password" name="password"></input>
//                     <br></br><br></br>
//                 </form>
//                 <button onClick = {() => handleSubmit()}>Submit</button>
//             </div>
//     );
// }


export default SetUpAccount;