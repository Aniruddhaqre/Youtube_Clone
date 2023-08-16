import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: ${({type}) => type !== "sm" && "360px"};
  margin-bottom: ${({type}) => type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display : ${({type}) => type === "sm" && "flex" };
  gap :10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${({type}) => type === "sm" ? "100px" : "202px"};
  background-color: #999;
  flex : 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${({type}) => type !== "sm" && "16px"};
  gap: 12px;
  flex : 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display : ${({type}) => type === "sm" && "none"}
`;

const Texts = styled.div`

`;

const Title = styled.div`
font-size : ${({type}) => type === "sm" ? "12px" : "16px"};
font-weight : ${({type}) => type === "sm" ? "500" : "500"};
color : ${({theme}) => theme.text}
`;

const ChannelName = styled.div`
font-size : ${({type}) => type === "sm" ? "9px" : "14px"};
color : ${({theme}) => theme.textSoft};
margin : 9px 0;

`;

const Info = styled.div`
font-size :  ${({type}) => type === "sm" ? "10px" : "14px"};
color : ${({theme} ) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
    <Container type={type}>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUNDV_EoOELrIMCwRgnniF42NmIM5Epy-6g&usqp=CAU" type={type}/>
      <Details type={type}>
        <ChannelImage src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp" type={type}/>
        <Texts type={type}>
            <Title type={type}>Best Video Ever</Title>
            <ChannelName type={type}>
                AniTube
            </ChannelName>
            <Info type={type}>660,655 views 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  );
};

export default Card;
