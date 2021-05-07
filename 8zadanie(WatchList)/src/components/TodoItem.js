import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import TodoTextInput from './GetInput'
import classnames from 'classnames'

export default class TodoItem extends Component {
  state = {
    editing: false,
    completed: this.props.todo.completed
  }
 
 
  

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSingleClick =() =>{
    console.log(this.props.todo.completed)
    this.setState({completed: true})
  }

  editInput = (id, text) => {
    console.log('Edit is clicked', this.props.todo.id)
    //  alert('edit child id' + ' ' + this.props.todo.id)
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }
  render() {
    const { todo, deleteTodo } = this.props
    
    let output
      if (this.state.editing){
          output = (
            <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.editInput(todo.id, text)} />
          )
      } else {
          output = (
            <div>
                <label>
                  <span onDoubleClick={() => this.handleDoubleClick()} className='text'>{todo.text} </span> |
                  <span className='list-id-edit' onClick={() => this.handleDoubleClick()}><FontAwesome name='pencil' /> Изменить</span>
                </label>
                
                <button className="delete"
                        onClick={() => deleteTodo(todo.id)}><FontAwesome name='trash-o' /> Удалить</button>
            </div>
          )
      }
    return (
       <li className={classnames({ completed: this.props.todo.completed })} >
        {output}   
       </li>
    )
  }
}


