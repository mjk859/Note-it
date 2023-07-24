import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

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
       
        <div className="container">
            <input type="text" className="styled-input" name="title" onChange={handleChange} placeholder="Enter title" value={note.title}></input>
            <br></br>
            <textarea type="text" className="styled-textArea" name="content" onChange={handleChange} placeholder="Enter content" value={note.content}
            rows={3}></textarea>
            <button className="action-button" onClick={handleClick}><AddIcon/></button>
        </div>
        
        
    )
}

export default CreateArea;