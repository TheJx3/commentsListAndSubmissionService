import React from 'react';
import styled from 'styled-components'; 
import RepliesList from './RepliesList';
import ReactTimeAgo from 'react-time-ago';

// styles
const CommentContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 20px 0px;
  `;
  
const CommentContent = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  margin-left: 10px;
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

const CommentUser = styled.div`
  color: #ccc;
`;

const CommentText = styled.div`
  color: black;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 15%;
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

const CommentEntry = ({username, songtime, text, timestamp, replies}) => {
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
    console.log(replies)
    return result;
  }

  return (
    <CommentContainer>
      <CommentContent>
      <Avatar>
        <a href='#'>
          <i className="fas fa-user-circle fa-2x"/>
        </a>
      </Avatar>
      <Content>
        <CommentUser>
          <a href='#'>{username}</a> at <a href='#'>{secondsToTime(songtime)}</a>
        </CommentUser>
        <CommentText>
          {text}
        </CommentText>
      </Content>
      <RightContainer>
          <ReactTimeAgo>
            {timestamp}
          </ReactTimeAgo>
          <ReplyButton>
            <i class="fas fa-reply fa-lg" />
          </ReplyButton>
      </RightContainer>  
      </CommentContent>
      <RepliesList repliesList={replies}/>
    </CommentContainer>
  )
};

export default CommentEntry;