import React from 'react';
import './Number.css';

const Number = (props) => {
    return (
        <div className="number">
            <h1>{props.value}</h1>
        </div>
    )
}

export default Number;