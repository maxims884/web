import React from 'react';
import "./Button.css"

const LessButton = props => {
    return <button className = "button" disabled = {props.disable}  onClick={props.click}>Less</button>
}

export default LessButton;