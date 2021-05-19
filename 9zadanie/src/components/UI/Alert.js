import React from 'react'; 

import './Alert.css'; 

 

const Alert = props => ( 

  <div className = {props.type}
  style={{ 

    opacity: props.show ? '1' : '0' 

  }} > 
    {props.children} 

  </div> 

); 

 

export default Alert; 