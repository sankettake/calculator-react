import React from 'react';
import './UserOutput.css'

const user_output = (props) => {
    return(
        <div className="UserOutput">
            {props.result}
        </div>
    )
}

export default user_output;