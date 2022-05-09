

import React, { useState, useEffect } from "react";
import {baseServerURL} from "../constants.js"
// import Modal from '@mui/material/Modal';

const MentorSearch = ()=>{
    const [signedIn, setSignedIn] = useState(true)
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
        makeBioList();
        // getBioList("All")
    }, []);

    //makeBioList is for testing. Fills BioList with fake local hardcoded cat profiles. 
    const makeBioList = (jsonObject) => {
        let tempBioList = []
        for (let i = 0; i < 20; i++){
            tempBioList.push(makeBioObject( 
                "https://philpeople.org/assets/storage/hn/53/variants/hn53pGbwWXTFg4zUUj8TQMuy/315ff44855809d54a726e8c586da6618910c4812e16ad3eacc2580fe3adba825",
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
                if (signedIn){
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


    //currenly not in use. 
    const [taglist, setTaglist] = useState(["Mentor"])
    const onAddTagClick = (event) => {
        var areaTag = document.getElementById("areaTag").value;
        setTaglist([...taglist, areaTag])
        event.preventDefault();
    }

    //onSubmit is called when user hits the search button on the 
    //search sidebar
    const onSubmit = (event) => {
        var specialty = document.getElementById("expertise").value;
        getBioList(specialty);
        event.preventDefault();
    }

    //used to remove a tag from the list of tags currently 
    const removeTag = (i) => {
        let tempTag = [...taglist.slice(0,i),...taglist.slice(i+1,taglist.length)]
        setTaglist(tempTag)
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

    //stuff for modal that will is still being tested
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);



    return(
        <div className= "mentor-box" >
            <div className = "profile">
                <img src= {props.bio.image} alt = {props.bio.name} />
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
            {/* <BioModal 
            bio = {props.bio} 
            index = {props.index}
            open={open}
            onClose={handleClose}
            /> */}
        </div>
    )
}

// const BioModal = (props) => {
//     return(
//         <Modal
//         open={props.open}
//         onClose={props.onClose}
//         >
//             <div className = "bio-modal">
//                 {props.bio.name}
//             </div>
//         </Modal>
//     )
// }

export default MentorSearch;