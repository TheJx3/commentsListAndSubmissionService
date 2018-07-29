import React from 'react';
import styled from 'styled-components'; 

// styles
const CommentContainer = styled.div`
  height: 40px;
  width: 600px;
  display: flex;
  margin: 5px 5px 5px 5px;
  justify-content: right;
`
const Space = styled.div`
  height: 120px;
  min-width: 120px;
`;

const Avatar = styled.div`
  height: 40px;
  min-width: 40px; 
  border: 2px solid cyan; 
  margin-right: 5px;
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
  return (
    <CommentContainer>
      <Space></Space> 
      <Avatar></Avatar> 
      <CommentContent>
        <Content>
          {comment.username} at {comment.songtime}
        </Content>
        <Content>
          {comment.text}
        </Content>
      </CommentContent>
    </CommentContainer>
  )
};

export default CommentEntry;