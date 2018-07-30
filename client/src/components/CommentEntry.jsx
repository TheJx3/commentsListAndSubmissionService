import React from 'react';
import styled from 'styled-components'; 
import ReplyEntry from './ReplyEntry';

// styles
const CommentContainer = styled.div`
  height: auto;
  width: 600px;
  display: flex;
  margin: 5px 5px 10px 5px;
`

const Avatar = styled.div`
  height: 40px;
  min-width: 40px; 
  border: 2px solid cyan; 
  margin-right: 8px;
`
const CommentContent = styled.div`
  display: flex;
  flex-direction: column
`

const Content = styled.div`
  font-size: 12px; 
  display: flex;
`;

// components
const CommentEntry = ({comment}) => {
  const secondsToTime = (songTime) => {
    songTime = Math.floor(songTime);
    let result;
    let hours = Math.floor(songTime / 3600);
    let minutes = Math.floor(songTime - (hours * 3600)) / 60;
    let seconds = songTime % 60;

    if (hours > 0) {
      result = Math.floor(hours);
      result += `:${(minutes < 10 ? "0" + Math.floor(minutes) : minutes)}`;
      result += `:${(seconds < 10 ? "0" + Math.floor(seconds) : seconds)}`;
    } else {
      result = `${Math.floor(minutes) + ':' + (seconds < 10 ? "0" + Math.floor(seconds) : seconds)}`;
    }

    return result;
  }

  return (
    <CommentContainer>
      <Avatar></Avatar> 
      <CommentContent>
        <Content>
          {comment.username} at {secondsToTime(comment.songtime)}
        </Content>
        <Content>
          {comment.text}
        </Content>
        <Content>
          <div>
            {comment.replies.map(reply => <ReplyEntry key={reply.id} reply={reply} />)}
          </div>
        </Content>
      </CommentContent>
    </CommentContainer>
  )
};

export default CommentEntry;