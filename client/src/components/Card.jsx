import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div`

`;

const Title = styled.div`
font-size : 16px;
font-weight : 500;
color : ${({theme}) => theme.text}
`;

const ChannelName = styled.div`
font-size :14px;
color : ${({theme}) => theme.textSoft};
margin : 9px 0;
`;

const Info = styled.div`
font-size : 14px;
color : ${({theme} ) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
    <Container>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUNDV_EoOELrIMCwRgnniF42NmIM5Epy-6g&usqp=CAU" />
      <Details>
        <ChannelImage src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp"/>
        <Texts>
            <Title>Best Video Ever</Title>
            <ChannelName>
                AniTube
            </ChannelName>
            <Info>660,655 views 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  );
};

export default Card;
