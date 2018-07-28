import React from 'react';
import $ from 'jquery';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {
    this.getComments();
  }

  getComments () {
    $.get('api/songs/songId/comments', (data) => {
      this.setState({ 
        data: data, 
        username: data[0].username, 
        text: data[0].text
      });
      console.log('this array should be printed in chrome dev console', this.state.data)
    });
  }



  render () {
    return (
      <div>
        {this.state.username} - {this.state.text}
      </div>
    );
  }
}

export default CommentsList; 
