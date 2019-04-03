import React from 'react';
import './UserInput.css'

const user_input = (props) => {
    let style = {}
    if (props.type==="small-digit"){
        style = {
            width:"60px",
            height:"60px",
            background: "#E0E0E0"
        }
    }
    if (props.type==="large-digit"){
        style = {
            width:"120px",
            height:"60px",
            background: "#E0E0E0"
        }
    }
    else if (props.type==="small-operator"){
        style = {
            width:"60px",
            height:"60px",
            background: "#F79231",
            color:"white"
        }
    }
    return(
        <button style={style} className='UserInput' onClick={props.clicked}>
            {props.value}
        </button>
    )
}

export default user_input;