import React from 'react';
import styled from 'styled-components';
import ReactTimeAgo from 'react-time-ago';

// styles
const ReplyContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 20px 0px;
  `;

const ReplyContent = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  margin-left: 30px;
`;

const Avatar = styled.div`
  height: 40px;
  border: 2px solid cyan; 
  flex-basis: 5%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin: 0 0 30px 10px;
  flex-basis: 80%;
`;

const ReplyUser = styled.div`
  color: #ccc;
`;

const ReplyText = styled.div`
  color: black;
`;

const RightContainer = styled.div`
  display: flex;
  flex-basis: 15%;
  flex-direction: column;
  font-size: 12px;
  margin: 0px 10px 0px 0px;
  text-align: right; 
  color: #999;
`;

const ReplyButton = styled.button`
  height: 28px; 
  width: 32px;
  color: #999;  
  margin-left: 100px;
`

// components
const ReplyEntry = ({username, songtime, text, timestamp}) => {
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
      <ReplyContent>
      <Avatar>
        <a href='#'><i className="far fa-user-circle fa-2x"></i></a>
      </Avatar>
      <Content>
        <ReplyUser>
          <a href='#'>{username}</a> at <a href='#'>{secondsToTime(songtime)}</a>
        </ReplyUser>
        <ReplyText>{text}</ReplyText>
      </Content>
      <RightContainer>
        <ReactTimeAgo>{timestamp}</ReactTimeAgo>
        <ReplyButton>
          <i class="fas fa-reply fa-lg" />
        </ReplyButton>
      </RightContainer>
      </ReplyContent>
    </ReplyContainer>
  )
}

export default ReplyEntry;