import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

import './App.css';

class JokeList extends Component {

  render() {
    let jokes = this.props.jokes;

    function createListItems(joke) {
      return <ListItem
        key={joke.id}
        primaryText={joke.joke}
      />
    }

    var listItems = jokes.map(createListItems);

    return (
      <List>
        {listItems}
      </List>
    );
  }
}

export default JokeList;
