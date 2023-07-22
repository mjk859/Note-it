import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setNote((prev) =>{
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleClick() {
        props.onAdd(note)
        
    }
    
    return(
       
        <div>
            <input name="title" onChange={handleChange} placeholder="Enter title" value={note.title}></input>
            <br></br>
            <input name="content" onChange={handleChange} placeholder="Enter content" value={note.content}></input>
            <button onClick={handleClick}>+</button>
        </div>
        
        
    )
}

export default CreateArea;