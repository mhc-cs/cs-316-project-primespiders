/*
Layout is used to render both the Navagation bar and the Footer components, 
while using react-router-dom to render the child route's element between the two. 

authors: C Brandt and E Gitlin
*/

import React from "react";
import flower from "../Flower-black.png";
import {Outlet, Link} from "react-router-dom";
import Footer from "./Footer";
import {useSelector} from "react-redux";
//import Checkbox from '@mui/material/Checkbox';

const Layout = (props) =>{
    const about = ["Mission Statment", "Staff", "Our Model"];
    const aboutLinks = ["/MissionStatement", "/Staff", "/OurModel"];
    const clients = ["Community Resources", "Connent with Mentors"];
    const clientLinks = ["/CommunityResources", "/ConnectWithMentors"];
    const getInvolved = ["Donate", "Volunteer", "Contact"];
    const involvedLinks = ["/Donate", "/Volunteer", "/Contact"];
    const account = ["Login", "Create Account"];
    const accountLinks = ["/Login", "/SetupAccount"];
    return (
        <>
        <header className="App-Header">
            <div className = "navbar">
            <Link to={"/"}><img className = "navbar-item" src = {flower}/></Link>
            <div class = "navbar-menus right">
                {/* <DropDown name = "Your Account" items = {account} links = {accountLinks}/> */}
                <DropDown name = "Get involved" items = {getInvolved} links = {involvedLinks}/>
                <DropDown name = "Clients" items = {clients} links = {clientLinks}/>
                <DropDown name = "About" items = {about} links = {aboutLinks}/>
                <AccountBox fname = "Kitty" profile = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"/>
            </div>
            </div>
        </header>
    <Outlet />
          <Footer></Footer>
    </>
    );
}

const DropDown = (props) =>{
   //remember to do name and items and links
    return(
        <div className = "dropdown navbar-item">
            <button class= "dropbtn">
                {props.name}
            </button>
            <div className = "dropdown-content">
                {
                props.items.map((item, i) => {
                return (
                        <Link key={i} to={props.links[i]}>{item}</Link>
                    )
                })
                }
            </div>
        </div>
    );
}

const AccountBox = (props) => {
    let loginStatus = useSelector(state=>state.loggedIn);
    let fname = props.fname
    let profile = props.profile

    //if the loginStatus is true, it should display a welcome box 
    //with the user's picture
    if (loginStatus){
        return (
        <div className = "navbar-item" >
            <div class = "account-profile">
                <div class = "center" >
                    <p>Welcome {fname}!</p>
                </div>
                <div class = "center" >
                    <img src={profile} alt="cat" ></img>
                </div>
            </div>
        </div>
        );
    }
    //Otherwise it will display the login and sign up buttons 
    //that link to the respective pages
    else{ 
        return (
            <div className = "navbar-item" >
                <div className ="account-buttons">
                    <div className = "vertical">
                        <Link to = "/SetupAccount">
                            Setup an Account
                        </Link>
                    </div>
                    <div className = "vertical">
                        <Link to = "/Login">
                            Log In
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Layout;