import React from 'react';
import $ from 'jquery';
import CommentsList from './CommentsList'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    $.get('api/songs/songId/comments', (data) => {
      this.setState({
        comments: data,
      });
      // log test
      // console.log('this array should be printed in chrome dev console', this.state.comments)
    });
  }

  render () {
    return (
      <div>
        <div>
          <p> <i class="fas fa-comment-alt"></i> {this.state.comments.length} comments </p>
        </div>
        <CommentsList commentsList={this.state.comments}/>
      </div>
    );
  }
}

export default App; 
