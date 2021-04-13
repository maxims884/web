import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../action/index";
import "./MenuItems.css"

class MenuItems extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className = "product-item">
        <img src = {item.src}></img>
            <div className = "product-list">
              <div >
                <label>{item.fooditem}</label>
              </div>
              < div className = "price">
                <label>Price: KGS{item.price}</label>
              </div>

              <div>
                <input className = "button" type="button" value="Add" id="btnAdd"
                  onClick={() => {
                    this.props.addToCart(item);
                  }}
                />
              </div>

            </div>
    </div>
      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => dispatch(addToCart(item))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(MenuItems);
