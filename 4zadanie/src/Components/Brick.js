import React from 'react';

export default function Brick(props) {
    const emoji = "🚩";
    const {isRing} = props;
    const className = props.isDiscovered ? `square square-revealed square` :
        "square";

    function getGameOverDisplayedIcon() {
        if (isRing) {
            return emoji;
        }
    }

    return <button
        className={className}
        onClick={props.onClick}
        >
        {props.isGameLost ? getGameOverDisplayedIcon() : null}
    </button>
};