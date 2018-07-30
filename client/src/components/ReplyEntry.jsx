import React from 'react';
import styled from 'styled-components';

// styles
const ReplyContainer = styled.div`
  height: auto;
  width: 500px;
  display: flex;
  margin: 22px 5px 1px 5px;
`

const Avatar = styled.div`
  height: 40px;
  min-width: 40px; 
  border: 2px solid cyan; 
  margin-right: 8px;
`;

const ReplyContent = styled.div`
  display: flex;
  flex-direction: column
`
const ReplyUser = styled.div`
  font-size: 12px;
  color: #999;
`;

const Content = styled.div`
  font-size: 12px;
`;

// components
const ReplyEntry = ({reply}) => {
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
    <ReplyContainer>
      <Avatar><a href='#'><i className="far fa-user-circle fa-2x"></i></a></Avatar>
      <ReplyContent>
        <ReplyUser>
          <a href='#'>{reply.username}</a> at <a href='#'>{secondsToTime(reply.songtime)}</a>
        </ReplyUser>
        <Content>
          {reply.text}
        </Content>
      </ReplyContent>
    </ReplyContainer>
  )
}

export default ReplyEntry;