import React from 'react';
import './Button.css';

const MoreButton = props => {
    return <button class = "button" onClick={props.click}>More</button>
}

export default MoreButton;