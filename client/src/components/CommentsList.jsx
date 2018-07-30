import React from 'react';
import CommentEntry from './CommentEntry';

const CommentsList = props => (
  <div>
    {props.commentsList.map(comment => <CommentEntry key={comment.id} comment={comment} />
    )}
  </div>
);

export default CommentsList; 
