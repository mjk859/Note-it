import React from "react";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
    return(
        <div >
            <p>{props.title}</p>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Note;