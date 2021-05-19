import React from 'react'; 
import "../Buttons/Button.css"
//import Wrapper from "../../../hoc/Wrapper"; 

const OrderSummary = props => { 

  return ( 

    <div> 

      <h3>Your order</h3> 

      <p><strong>Total Price: {props.price} KGS</strong></p> 

      <p>Continue to checkout?</p> 

      <button className = "button" onClick = {props.closed}>CANCEL</button> 

      <button className = "button" onClick = {props.continue}>CONTINUE</button> 

    </div> 
  ) 
}; 

export default OrderSummary;