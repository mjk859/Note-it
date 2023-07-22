import React from "react";

function Footer(params) {
    const currYear = new Date().getFullYear();
    return(
       <footer>
            <p>Copyright © {currYear}</p>
        </footer>
 
        
        
    )
}

export default Footer;