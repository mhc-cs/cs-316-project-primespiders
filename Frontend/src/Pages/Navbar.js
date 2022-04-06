import React from "react";
import flower from "../Flower-black.png"

const NavBar = (props) =>{
    // const menus = {
    //     about: {
    //         title: "About",
    //         names: ["Mission Statment", "Staff", "Our Model"],
    //         links: ["link1", "link2", "link3"]
    //     },
    //     clients: {
    //         title: "Clients",
    //         names: ["Community Resources", "Connent with Mentors"],
    //         links: ["link1", "link2"]
    //     },
    //     getInvolved: {
    //         title: "Get Involved",
    //         names: ["Donate", "Volunteer", "Contact"],
    //         links: ["link1", "link2", "link3"]
    //     }

    // }}
    const about = ["Mission Statment", "Staff", "Our Model"];
    const aboutLinks = ["link1", "link2", "link3"]
    const clients = ["Community Resources", "Connent with Mentors"];
    const clientLinks = ["link1", "link2"]
    const getInvolved = ["Donate", "Volunteer", "Contact"];
    const involvedLinks = ["link1", "link2", "link3"]
    return (
        <div class = "navbar">
            <img className = "navbar-item" src = {flower}/>
            <DropDown name = "About" items = {about} links = {aboutLinks}/>
            <DropDown name = "Clients" items = {clients} links = {clientLinks}/>
            <DropDown name = "Get involved" items = {getInvolved} links = {involvedLinks}/>
        </div>
    );
}

const DropDown = (props) =>{
   //remember to do name and items
    return(
        <div className = "dropdown navbar-item">
            <button class= "dropbtn">
                {props.name}
            </button>
            <div className = "dropdown-content">
                {
                props.items.map((item, i) => {
                return (<a key={i} href={props.links[i]}>{item}</a>)
                })
                }
            </div>
        </div>
    );
}

export default NavBar;