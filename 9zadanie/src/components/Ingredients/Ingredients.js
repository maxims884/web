import React from 'react';
import Ingredient from './Ingredient';

const Ingredients = props => {
    return props.ingredients.map(ingredient => {
        return <Ingredient 
            key={ingredient.id}
            title={ingredient.name} 
            increase={() => props.increase(ingredient.id)}
            decrease={() => props.decrease(ingredient.id)}
            disable={ingredient.disable} />
    });
}

export default Ingredients;