import React from "react";
import { styled } from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #999;
`;
const Input = styled.input`
  padding: 10px;
  background-color: transparent;
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp" />
        <Input placeholder="Add a comment" />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
};

export default Comments;
