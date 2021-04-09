import React from 'react';
import LessButton from '../Buttons/LessButton';
import MoreButton from '../Buttons/MoreButton';

const Ingredient = props => {
    return <div>
            {props.title}
            <LessButton disable = {props.disable} click={props.decrease}></LessButton> 
            <MoreButton click={props.increase}></MoreButton>    
    </div> 
}

export default Ingredient;