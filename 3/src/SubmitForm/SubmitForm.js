import React from 'react';

class SubmitForm extends React.Component {
    state = { term: '' };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.term === '') return;
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: '' });
    }
  
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            className='input'
            placeholder='Add new task'
            value={this.state.term}
            onChange={(e) => this.setState({term: e.target.value})}
          />
          <button className='button'>Add</button>
        </form>
      );
    }
  }

  export default SubmitForm;