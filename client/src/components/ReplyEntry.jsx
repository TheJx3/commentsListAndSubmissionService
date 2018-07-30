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
  return (
    <ReplyContainer>
      <Avatar></Avatar>
      <ReplyContent>
        <ReplyUser>
          {reply.username}
        </ReplyUser>
        <Content>
          {reply.text}
        </Content>
      </ReplyContent>
    </ReplyContainer>
  )
}

export default ReplyEntry;