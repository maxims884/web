import React from 'react';
import './Burger.css';

const BurgerInterface = props => {
    
    let items = [];
    props.ingredients.map(ingredient => {
        if(ingredient.name === 'Salad') 
        {
            for(var i=0; i<ingredient.count; i++)
                items.push(<div class="Salad"></div>)
        }
        return items;
    });

    props.ingredients.map(ingredient => {
        if(ingredient.name === 'Cheese') 
        {
            for(var i=0; i<ingredient.count; i++)
                items.push(<div class="Cheese"></div>)
        }
        return items;
    });

    props.ingredients.map(ingredient => {
        if(ingredient.name === 'Bacon') 
        {
            for(var i=0; i<ingredient.count; i++)
                items.push(<div class="Bacon"></div>)
        }
        return items;
    });
    
    props.ingredients.map(ingredient => {
        if(ingredient.name === 'Meat') 
        {
            for(var i=0; i<ingredient.count; i++)
                items.push(<div class="Meat"></div>)
        }
        return items;
    });

    return  (
        <div class="Burger">
            <div class="BreadTop">
                <div class="Seeds1"></div>
                <div class="Seeds2"></div>
            </div>
            {items}
            <div class="BreadBottom"></div>
        </div>
    )
}

export default BurgerInterface;