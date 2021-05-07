import React, { Component } from 'react'

export default class TodoTextInput extends Component {

  state = {
    text: this.props.text
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

 



  render() {
    return (
      <div>
          <input 
          type="text"
          placeholder= 'Введите фильм'
          className="add-value"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}/>
      </div>
        
    )
  }
}
