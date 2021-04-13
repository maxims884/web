import React, { Component } from "react";
import MenuItems from "./MenuItems";
import CartItems from "./CartItems";
import { connect } from "react-redux";
import "./HomePage.css"

class HomePage extends Component {
  render() {
    return (
     
     <div >
       <div  className = "grid-container">
           <div>
              <div>
                <h2>Menu</h2>
              </div>
              <div className = "grid-container">

                {this.props.stateArray.inventory.map(
                (item, index) => {
                return (
                  <MenuItems key={index} item={item} />
                  );
                }
                )}
              </div>
          </div>

          <div >
            <div>
              <h2>Order</h2>
            </div>                    
            <div>
              <CartItems />
            </div>
          </div>

          <div>
            <label>
               <h2> Total: {this.props.stateArray.total.totalvalue} </h2>
            </label>
          </div>

       </div>
      </div>
    );
  }
}

function mapStateToProps(stateArray) {
  console.log(stateArray);
  return { stateArray };
}

export default connect(
  mapStateToProps,
  null
)(HomePage);
