import React from 'react';
import ReplyEntry from './ReplyEntry';

const RepliesList = ({repliesList}) => (
  <div>
    {repliesList.map((reply) =>
    <ReplyEntry
      key={reply.id}
      reply={reply}
      username={reply.username}
      userId={reply.userId}
      songtime={reply.songtime}
      timestamp={reply.timestamp}
      text={reply.text}
    />
    )}
  </div>
);

export default RepliesList; 
