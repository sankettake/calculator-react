import React from 'react';
import './UserInput.css'

const user_input = (props) => {
    return(
        <button className='UserInput' onClick={props.clicked}>
            {props.value}
        </button>
    )
}

export default user_input;