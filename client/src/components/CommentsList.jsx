import React from 'react';
import CommentEntry from './CommentEntry';

const CommentsList = ({commentsList}) => (
  <div>
    {commentsList.map((comment) => 
    <CommentEntry 
      key={comment.id}
      comment={comment} 
      username={comment.username} 
      userId={comment.userId}
      songtime={comment.songtime} 
      timestamp={comment.timestamp}
      text={comment.text}
      replies={comment.replies}
    />
    )}
  </div>
);

export default CommentsList; 
