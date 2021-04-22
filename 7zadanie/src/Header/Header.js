import React from 'react';

const Header = (props) => {
  var price  = 0;
  
  props.tasks.map((todo, index) => {
    price += parseInt(todo.cost);
  })
    return(
      <div>
        <h1>
          Total price: {price} KGS
        </h1>
      </div>
    )
  }
export default Header;