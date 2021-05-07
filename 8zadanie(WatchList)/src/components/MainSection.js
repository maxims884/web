import React, { Component } from 'react'
import TodoItem from './TodoItem'
import FontAwesome from 'react-fontawesome'


export default class MainSection extends Component {
  
  state = {
    id: this.props.id
  }

  clearAll = e => {
   console.log('Успешно очишенно!!', this.props.actions.clearTodo)
   this.props.actions.clearTodo()
  }
  
  

  render() {
    const { todos, actions} = this.props
    return (
      <section className="main">
        <div className="c-wrap"><button onClick={this.clearAll} className="clear-all-btn"><FontAwesome name='eraser' />  Очистить всё | Количество фильмов: {this.props.todos.length}</button></div>
        <div className="c-wrap">
          <ul className="todo-list">
          {todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        </div>
      </section>
    )
  }
}
