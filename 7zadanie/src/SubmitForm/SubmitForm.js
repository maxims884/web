import React from 'react';

class SubmitForm extends React.Component {
    state = { term: {name:'',cost: 0},str:'',num:0};
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.str === '') return;
      if(this.state.num === '') return;
      this.state.term.name = this.state.str;
      this.state.term.cost = this.state.num;
      this.props.onFormSubmit(this.state.term);
      this.state.str = '';
      this.state.num = '';
    }
  
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            className='input'
            placeholder='Add new task'
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