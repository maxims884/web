import { ADD, REMOVE } from "../action/index";

let initialState = {
  inventory: [
    { fooditem: "Hamburger", price: 80, src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1202&q=80" },
    { fooditem: "Cheeseburger", price: 90,  src: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { fooditem: "Fries", price: 45,  src: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { fooditem: "Coffee", price: 70,  src: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" },
    { fooditem: "Tea", price: 50,  src: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},
    { fooditem: "Cola", price: 40,  src: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"}
  ],
  cart: [],
  total: [{ totalvalue: 0 }]
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      let alreadyInCart = false;
      if (state.cart.length > 0) {
        state.cart = state.cart.map(cartitem => {
          if (cartitem.fooditem === action.item.fooditem) {
            cartitem.qty += 1;
            alreadyInCart = true;
          }
          return cartitem;
        });
      }

      if (!alreadyInCart) {
        state.cart.push({
          src: action.item.src,
          fooditem: action.item.fooditem,
          price: action.item.price,
          qty: 1
        });
      }
      updateTotal(state);
      //apart from cart state all objects of state remains same
      return {
        ...state,
        [action.cart]: state.cart
      };

    case REMOVE:
      console.log("Food Item to be removed: " + action.item.fooditem);
      let index = -1;
      state.cart.every(cartItem => {
        if (cartItem.fooditem === action.item.fooditem) {
          index = state.cart.indexOf(cartItem);
        }
        return index;
      });
      if (index !== -1) {
        state.cart.splice(index, 1);
        //delete state.cart[index];
      }
      updateTotal(state);
      //apart from cart state all objects of state remains same
      return {
        ...state,
        [action.cart]: state.cart
      };
    default:
      return state;
  }
};

export function updateTotal(state) {
  if (state.cart.length > 0) {
    console.log(state.cart);
    console.log(state.cart.length);
    let total = 0;
    state.cart.every(cartitem => {
      total += cartitem.price * cartitem.qty;
      return total;
    });
    console.log("total amount: " + total);
    state.total.totalvalue = total;
  } else {
    state.total.totalvalue = 0;
  }
  return state;
}

export default todos;
