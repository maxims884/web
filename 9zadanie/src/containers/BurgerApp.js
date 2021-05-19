import { Component } from 'react';
import './App.css';
import CurrentPrice from '../components/Price/CurrentPrice';
import Ingredients from '../components/Ingredients/Ingredients';
import BurgerInterface from '../components/BurgerInterface/BurgerInterface';
import Modal from '../components/UI/Modal'
import Alert from '../components/UI/Alert'
import OrderSummary from '../components/Burger/OrderSummary'
import Backdrop from "../components/UI/Backdrop"; 

class BurgerApp extends Component {

  state = {
    purchasing: false,
    alert: false,
    price: 125,
    ingredients: [
      {name: 'Salad',  price:  5,  count: 1, id: 1, disable:false},
      {name: 'Cheese', price:  20, count: 1, id: 2, disable:false},
      {name: 'Bacon',  price:  30, count: 1, id: 3, disable:false},
      {name: 'Meat',   price:  50, count: 1, id: 4, disable:false}
    ]
  }

  increaseIngr = (id) => {
    const index = this.state.ingredients.findIndex(p=>p.id === id);
    
    let ingredient = {...this.state.ingredients[index]};
    ingredient.count = ingredient.count + 1;

    const ingredients = [...this.state.ingredients];
    ingredients[index] = ingredient;

    let price = this.state.price;
    price = price + ingredient.price;

    ingredient.disable = false;

    this.setState({ingredients, price});
  }

  decreaseIngr = (id) => {
    const index = this.state.ingredients.findIndex(p=>p.id === id);
    
    let ingredient = {...this.state.ingredients[index]};
    if(ingredient.count > 0)
    {
      ingredient.count = ingredient.count - 1;

      const ingredients = [...this.state.ingredients];
      ingredients[index] = ingredient;

      let price = this.state.price;
      price = price - ingredient.price;
  
      ingredient.disable= false;

      this.setState({ingredients, price});
    }

    if(ingredient.count === 0)
    {
        ingredient.disable= true;
    } 
  }

  purchaseHandler = () => { 

    this.setState({purchasing: true}); 

  }; 

  purchaseCancelHandler = () => { 

    this.setState({purchasing: false}); 

  }; 

  purchaseContinueHandler = () => { 
 
    this.setState({purchasing: false  }); 
    this.setState({alert: true}); 
    // alert('You continued!'); 
  }; 
  
  alertCloseHandler = () => { 

    this.setState({alert: false}); 
    // alert('You continued!'); 
  }; 

  render() {
    return (
      <div className="App">
        <Backdrop show={this.state.purchasing} clicked={this.purchaseCancelHandler} /> 
        <BurgerInterface ingredients={this.state.ingredients}>

        </BurgerInterface>
        <header className="App-header">
          <CurrentPrice price={this.state.price}></CurrentPrice>
          <Ingredients
            ingredients={this.state.ingredients} 
            increase = {this.increaseIngr} 
            decrease = {this.decreaseIngr}/>
            <button className = "button"  onClick={this.purchaseHandler}  >ORDER NOW</button> 
        </header>
        <Modal show={this.state.purchasing}
        closed={this.purchaseCancelHandler}> 
          <OrderSummary 
              price={this.state.price}
              closed={this.purchaseCancelHandler}  
              continue={this.purchaseContinueHandler}
           />
        </Modal> 
       <Alert show={this.state.alert} 
        type = {"alert success"}
        > 
          Price : {this.state.price}
          <button className ="closebtn" onClick = {this.alertCloseHandler}>x</button>
        
        </Alert> 
 
        <Alert show={this.state.alert} 
        type = {"alert2"}
        > 
          Price : {this.state.price}
          <button className ="closebtn" onClick = {this.alertCloseHandler}>x</button>
        
        </Alert> 
      </div>
    );
  }
}

export default BurgerApp;
