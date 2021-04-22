import './App.css';
import React, {Component} from 'react';
import SubmitForm from './SubmitForm/SubmitForm';
import Header from './Header/Header';
import TodoList from './ToDoList/ToDoList';
class App extends Component {

  state = {
    tasks: []
  };

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }

  render() {
  
    return(
        <div>
          <Header  tasks={this.state.tasks} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
        </div>
    );
  }
}



export default App;
