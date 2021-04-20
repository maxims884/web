import React from 'react';

const Header = (props) => {
    return(
      <div>
        <h1>
          You have {props.numTodos} tasks
        </h1>
      </div>
    )
  }

export default Header;