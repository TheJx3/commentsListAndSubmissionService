import React from 'react';
import CommentsList from './CommentsList'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  render () {
    return (
      <div>
        <h1> Comments </h1>
        <CommentsList />
      </div>
    );
  }
}

export default App; 