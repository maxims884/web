import React from 'react';
import "./List.css"
const ToDoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
      return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return( 
      <div>
        {todos}
      </div>
    );
  }

  const Todo = (props) => {
    return(
      <div className ='raw'>
        {props.content.name}
        {'_______________________'}
        {props.content.cost  +'KGS'}
      <button class="button" onClick={() => {props.onDelete(props.id)}}>Delete</button>
      </div>
    );
  }


export default ToDoList;