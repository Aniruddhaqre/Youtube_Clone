import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const CommentDate = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp" />
      <Details>
        <Name>
          Aniruddha<CommentDate>1 day ago</CommentDate>
        </Name>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem totam ex consequatur fugiat esse est culpa doloribus
          asperiores voluptatibus, quis accusantium iste quaerat laboriosam
          ipsum dolores incidunt molestiae facilis excepturi!
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
