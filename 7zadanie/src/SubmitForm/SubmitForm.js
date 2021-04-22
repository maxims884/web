import React from 'react';
import "./Form.css";
class SubmitForm extends React.Component {
    state = { str:'',num:''};
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.str === '') return;
      if(this.state.num === '') return;
      var term = {name:'',cost:''};
      term.name = this.state.str;
      term.cost = this.state.num;
      this.props.onFormSubmit(term);
      //this.props.onFormSubmit(this.state.str);
      this.state.str = '';
      this.state.num = '';
    }
  
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            className='input'
            placeholder='Add new item'
            value={this.state.str}
            onChange={(e) => this.setState({str: e.target.value})}
          />

           <input 
            type='text'
            className='input'
            placeholder='Cost'
            value={this.state.num}
            onChange={(e) => this.setState({num: e.target.value})}
          />
          <button className='button'>Add</button>
        </form>
      );
    }
  }

  export default SubmitForm;  