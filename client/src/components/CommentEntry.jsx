import React from 'react';

const CommentEntry = ({comment}) => {
  return (
    <div>
      <span>{ comment.username }</span>
      <p>{ comment.text }</p>
    </div>
  )
};

export default CommentEntry;