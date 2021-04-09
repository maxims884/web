import { Component } from 'react';
import './App.css';
import CurrentPrice from '../components/Price/CurrentPrice';
import Ingredients from '../components/Ingredients/Ingredients';
import BurgerInterface from '../components/BurgerInterface/BurgerInterface';

class BurgerApp extends Component {

  state = {
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

  render() {
    return (
      <div className="App">
        <BurgerInterface ingredients={this.state.ingredients}>

        </BurgerInterface>
        <header className="App-header">
          <CurrentPrice price={this.state.price}></CurrentPrice>
          <Ingredients
            ingredients={this.state.ingredients} 
            increase = {this.increaseIngr} 
            decrease = {this.decreaseIngr}/>
        </header>
      </div>
    );
  }
}

export default BurgerApp;
