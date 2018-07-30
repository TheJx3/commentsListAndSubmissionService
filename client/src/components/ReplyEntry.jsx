import React from 'react';
import styled from 'styled-components';

// styles
const CommentContainer = styled.div`
  height: auto;
  width: 600px;
  display: flex;
  margin: 22px 5px 1px 5px;
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
const ReplyEntry = ({reply}) => {
  return (
    <CommentContainer>
      <Avatar></Avatar>
      <CommentContent>
        <Content>
          {reply.username}
        </Content>
        <Content>
          {reply.text}
        </Content>
      </CommentContent>
    </CommentContainer>
  )
}

export default ReplyEntry;