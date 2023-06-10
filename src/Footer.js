
import React from "react"


const Footer =({length})=>{
    return(
        <React.Fragment>
            <h4>{length} {length===1 ? "List" : "Lists"}</h4>
            <footer>
                <h4>coderad &copy;copyrights All rights reserved {new Date().getFullYear()}</h4>
            </footer>
        </React.Fragment>
    )
}

export default Footer