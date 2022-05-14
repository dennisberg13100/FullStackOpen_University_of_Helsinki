import React from "react"

const Filter = ({eventHandler}) => {
    return(
        <div>
            filter shown with <input 
                onChange={eventHandler}
            />
        </div>
    )
}

export default Filter