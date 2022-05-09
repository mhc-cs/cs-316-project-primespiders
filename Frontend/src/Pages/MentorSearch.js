/*
MentorSearch has a sidebar that controls search functionality, and a grid that 
displays mentor bio boxes. The mentor bios are pulled from the database based on the 
search criteria entered in the side bar. The page defaults to searching and displaying 
all entries that are currently in the database

authors: C Brandt, E Gitlin, M Klien
reference: https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/
*/

import React, { useState, useEffect } from "react";
import {baseServerURL} from "../constants.js"
import {useSelector} from "react-redux";
// import Modal from '@mui/material/Modal';

const MentorSearch = ()=>{
    const loggedIn = useSelector(state=>state.loggedIn);
    const [biolist, setBiolist] = useState([])
    const makeBioObject = (image, name, text, expertise) => {
        return {
            image: image, 
            name: name, 
            text: text,
            expertise: expertise

        }
    }

    //This useEffect will run makeBioList when the page first renders. 
    //Once we have the backend setup, we can adjust makeBioList to fetch
    //the correct list of bios given the search criteria
    useEffect(() => {
        //makeBioList();
        getBioList("All")
    }, []);

    //makeBioList is for testing. Fills BioList with fake local hardcoded cat profiles. 
    const makeBioList = (jsonObject) => {
        let tempBioList = []
        for (let i = 0; i < 20; i++){
            tempBioList.push(makeBioObject( 
                undefined,
                "John Smith",
                "Hello! my name is John and I am passionate about entrepreneurship. I would love to chat and talk about how you can get started in the industry!",
                ["Business", "Sheboygan", "Phil@temporal12345635663245235.com"]
            ))
        }
        setBiolist(tempBioList)
    }

    //getBioList fetches bios from db based on inputs
    function getBioList(expertise){
        //return bios with the correct expertise
        if (expertise === "All"){
            fetch(`${baseServerURL}/bios/`)
            .then(res=> res.json()) //convert response to JSOn
            .then(data => {
            let tempBioList = []
            console.log(data)
            for (let i= 0; i<data.length; i++){ //iterate through all bios
                let bio = data[i]
                
                //set the data that is loaded based on if the user is signed in
                if (loggedIn){
                    var tags = [bio.expertise, bio.location, bio.contact]
                }
                else{
                    var tags = [bio.expertise, bio.location]
                }

                //make a bio in the correct format using makeBioObject
                tempBioList.push(
                    makeBioObject(  
                    bio.image,
                    bio.name,
                    bio.bio,
                    tags)
                )
            }
            console.log(tempBioList);
            setBiolist(tempBioList);
        })
        .catch(e => console.log(e));
        }
        else {
            fetch(`${baseServerURL}/bios/filter/`+expertise)
            .then(res=> res.json()) //convert response to JSOn
            .then(data => {
            let tempBioList = []
            console.log(data)
            for (let i= 0; i<data.length; i++){
                let bio = data[i]
                //make a bio in the correct format using makeBioObject
                tempBioList.push(makeBioObject(  
                    bio.image,
                    bio.name,
                    bio.bio,
                    [bio.expertise, bio.location]
                ))
            }
            console.log(tempBioList);
            setBiolist(tempBioList);
        })
        .catch(e => console.log(e));
        }
    }

    //onSubmit is called when user hits the search button on the 
    //search sidebar
    const onSubmit = (event) => {
        var specialty = document.getElementById("expertise").value;
        getBioList(specialty);
        event.preventDefault();
    }

    //WHERE WE RENDER MENTOR PAGE 
    return(
    <div className  = "mentor-page">
        <div className = "sidebar">
            <div className = "sidebar-content">
                <h1>
                Search our Mentors!
                </h1>
                <p>
                Enter Select an area of expertise to narrow down the mentors...
                </p>
                <form onSubmit = {onSubmit}>
                    {/* <input type="text" id="areaTag" name="areaTag"></input> */}
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
                    {/* <button onClick = {onAddTagClick}>Add</button>
                    <div className = "tagbox">
                        {
                            taglist.map((item, i) => {
                            return (<p className = "tags" onClick = {() => removeTag(i)} key = {i}>{item}</p>)
                            })
                        }
                    </div> */}
                    <input type= "submit" value = "Search"></input>
                </form>
            </div>
        </div>
        <div className = "search-results">
            <h1>Search Results:</h1>
            <div className = "mentor-grid">
                {
                //creating a MentorBioBox for each bio in the current biolist
                biolist.map((item,i) => {
                    return(            
                    <MentorBioBox 
                        bio = {item}
                        key = {i}
                        index = {i}
                        />
                    )
                })
            }
            </div>
        </div>
    </div>
    )
}

const MentorBioBox = (props)=> {
    if (props.bio.image){
        var image = props.bio.image
    }
    else{ //else image is undefined then load a default image
        //https://www.flaticon.com/free-icons/user
        var image = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
    }
    return(
        <div className= "mentor-box" >
            <div className = "profile">
                <img src= {image} alt = {props.bio.name} />
                <h4>{props.bio.name}</h4>
                {
                    props.bio.expertise.map((item, i) => {
                    return (<p className = "tags" key = {i}>{item}</p>)
                    })
                }
            </div>
            <div className = "textbox">
                <p id = {props.id}>{props.bio.text}</p>
            </div> 
        </div>
    )
}

export default MentorSearch;