import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../action/index";
import "./MenuItems.css"


class CartItems extends Component {
  render() {
    console.log(this.props);

    return <div>{this.getdata()}</div>;
  }

  getdata() {

    return this.props.stateArray.cart.map(item => {
      return (
        <div className = "product-item">
           <div className = "product-list"> 
           <div >
              <label>{item.fooditem}</label>
            </div>
            <div className = "price">
              <label>
               t: KGS{item.price} <br /> QTY: {item.qty}
              </label>
            </div>
            <div >
              <input  className = "button" type="button" value="Remove" id="btnAdd"
                onClick={() => {
                this.props.removeFromCart(item);
                }}
              />
            </div>
            </div>
        </div>
      );
    });
  }
}


function mapStateToProps(stateArray) {
  return { stateArray };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: item => dispatch(removeFromCart(item))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);
