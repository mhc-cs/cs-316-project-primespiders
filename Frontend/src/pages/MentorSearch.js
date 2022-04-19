import React, { useState, useEffect } from "react";
// import Modal from '@mui/material/Modal';

const MentorSearch = ()=>{
    const [biolist, setBiolist] = useState([])
    const makeBioObject = (image, name, text) => {
        return {image: image, name: name, text: text}
    }

    //This useEffect will run makeBioList when the page first renders. 
    //Once we have the backend setup, we can adjust makeBioList to fetch
    //the correct list of bios given the search criteria
    useEffect(() => {
        makeBioList();
      }, []);
    
    const makeBioList = () => {
        let tempBioList = []
        for (let i = 0; i < 20; i++){
            tempBioList.push(makeBioObject( 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
                "Catalyn the kitty",
                "Hello! my name is cat and I am here to party! I like to scratch things and play with yarn"
            ))
        }
        setBiolist(tempBioList)
    }

    const [taglist, setTaglist] = useState(["Mentor"])
    const onAddTagSubmit = (event) => {
        var areaTag = document.getElementById("areaTag").value;
        setTaglist([...taglist, areaTag])
        event.preventDefault();
    }

    //used to remove a tag from the list of tags currently 
    const removeTag = (i) => {
        let tempTag = [...taglist.slice(0,i),...taglist.slice(i+1,taglist.length)]
        setTaglist(tempTag)
    }

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
                <form onSubmit = {onAddTagSubmit}>
                    <input type="text" id="areaTag" name="areaTag"></input>
                    <input type="submit" value="Add Tag"></input>
                </form>
                <div className = "tagbox">
                    {
                        taglist.map((item, i) => {
                        return (<p onClick = {() => removeTag(i)} key = {i}>{item}</p>)
                        })
                    }
                </div>
            </div>
        </div>

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
                <p>Some basic info about cat</p>
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