import './App.css';
import React, {Component} from 'react';
import Number from './Number/Number';

class App extends Component {

  state = {
    numbers: [
      {value: 0},
      {value: 0},
      {value: 0},
      {value: 0},
      {value: 0},
    ]
  }

  newNumbers = () => {
    let numbers = this.state.numbers;

    const min = 5;
    const max = 36;
    var rand = new Array(5);
    
    rand[0] = Math.round(min + Math.random() * (max - min));
   // var rand1 = 0;
    //var rand2 = 0;
    //var rand3 = 0;
    //var rand4 = 0;
    
    while(true)
    {
      rand[1] = Math.round(min + Math.random() * (max - min));
      if (rand[1] !== rand[0]) break;
    }
    while(true)
    {
      rand[2] = Math.round(min + Math.random() * (max - min));
      if (rand[2] !== rand[0] && rand[1] !== rand[2]) break;
    }
    while(true)
    {
      rand[3] = Math.round(min + Math.random() * (max - min));
      if (rand[3] !== rand[0] && rand[3]!== rand[1] && rand[3]!== rand[2]) break;
    }
    while(true)
    {
      rand[4] = Math.round(min + Math.random() * (max - min));
      if (rand[4] !== rand[0] && rand[4]!== rand[1] && rand[4]!== rand[2] && rand[4]!== rand[3]) break;
    }
    
    
    //const rand = Math.min(rand0,rand1,rand2,rand3,rand4);

  
    rand = rand.sort(function(a, b) {
      return a - b;
    });

    numbers[0].value = rand[0];
    numbers[1].value = rand[1];
    numbers[2].value = rand[2];
    numbers[3].value = rand[3];
    numbers[4].value = rand[4];

    this.setState({numbers});
  };

  render() {
    return (
      <div className="App">
      <div> <button onClick={this.newNumbers}> New numbers </button></div>
        <header className="App-header">
          <Number value={this.state.numbers[0].value} >  </Number>
          <Number value={this.state.numbers[1].value} > </Number>
          <Number value={this.state.numbers[2].value} > </Number>
          <Number value={this.state.numbers[3].value} > </Number>
          <Number value={this.state.numbers[4].value} > </Number>
        </header>
      </div>
    );
  }
  
}

export default App;
