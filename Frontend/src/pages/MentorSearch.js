import React, { useState, useEffect } from "react";
import {baseServerURL} from "../constants.js"
// import Modal from '@mui/material/Modal';

const MentorSearch = ()=>{
    const [biolist, setBiolist] = useState([])
    const makeBioObject = (image, name, text, tags) => {
        return {
            image: image, 
            name: name, 
            text: text,
            tags: tags

        }
    }

    //This useEffect will run makeBioList when the page first renders. 
    //Once we have the backend setup, we can adjust makeBioList to fetch
    //the correct list of bios given the search criteria
    useEffect(() => {
        makeBioList();
    }, []);
    
    const makeBioList = (jsonObject) => {
        let tempBioList = []
        for (let i = 0; i < 20; i++){
            tempBioList.push(makeBioObject( 
                "https://philpeople.org/assets/storage/hn/53/variants/hn53pGbwWXTFg4zUUj8TQMuy/315ff44855809d54a726e8c586da6618910c4812e16ad3eacc2580fe3adba825",
                "Catalyn the kitty",
                "Hello! my name is cat and I am here to party! I like to scratch things and play with yarn",
                ["cat", "orange", "cute", "lots of text here to test if we can fit tags"]
            ))
        }
        setBiolist(tempBioList)
    }

    function getBioList(){
        fetch("http://localhost:9000/users")
        .then(res=> res.json()) //convert response to JSOn
        .then(data => {
            let tempBioList = []
            console.log(data)
            for (let i= 0; i<data.length; i++){
                //make a bio in the correct format using makeBioObject
                tempBioList.push(makeBioObject(  
                    "https://philpeople.org/assets/storage/hn/53/variants/hn53pGbwWXTFg4zUUj8TQMuy/315ff44855809d54a726e8c586da6618910c4812e16ad3eacc2580fe3adba825",
                    data[i].firstName,
                    "lorem Ipsum blah blah blah",
                    [data[i].email, data[i].lastName]
                ))
            }
            console.log(tempBioList);
            setBiolist(tempBioList);
        })
        .catch(e => console.log(e));
    }

    const [taglist, setTaglist] = useState(["Mentor"])
    const onAddTagClick = (event) => {
        var areaTag = document.getElementById("areaTag").value;
        setTaglist([...taglist, areaTag])
        event.preventDefault();
    }

    const onSubmit = (event) => {
        getBioList();
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
                Enter a tag to narrow down the mentors.
                </p>
                <form onSubmit = {onSubmit}>
                    <input type="text" id="areaTag" name="areaTag"></input>
                    <button onClick = {onAddTagClick}>Add</button>
                    <div className = "tagbox">
                        {
                            taglist.map((item, i) => {
                            return (<p className = "tags" onClick = {() => removeTag(i)} key = {i}>{item}</p>)
                            })
                        }
                    </div>
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
            <div>
                <img src= {props.bio.image} alt = {props.bio.name} />
                <h4>{props.bio.name}</h4>
                {
                    props.bio.tags.map((item, i) => {
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