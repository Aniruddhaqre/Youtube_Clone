import React from "react";
import { styled } from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card"

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.textSoft};
  
`;

const Button = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  &:hover {
    filter : brightness(0.8)
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  gap: 5px;
`;

const Image = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #999;
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top : 5px;
  margin-bottom : 20px;
  color : ${({theme}) => theme.textSoft};
  font-size : 12px;
`;
const Description = styled.p`
 font-size : 14px;

`;

const SubscribeBtn = styled.button`
  background-color : #cc1a00;
  text-transform: uppercase;
  color : white;
  font-weight : 500;
  border : none;
  border-radius : 3px;
  height : max-content;
  padding : 10px 20px ;
  cursor : pointer;
  &:hover {
    filter : brightness(0.8);
  }
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            height="360px"
            width="100%"
            src="https://www.youtube.com/embed/wQmKqqsS-vs"
            title="Youtube video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            frameborder="0"
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>2.4M views 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <SaveAltOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp" />
            <ChannelDetail>
              <ChannelName>Sam-o-nella</ChannelName>
              <ChannelCounter>123k Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, voluptatibus sunt commodi voluptate hic dolorum.
                Itaque, magni accusantium! Aperiam at repellat temporibus quia
                in voluptatem! Iste optio nesciunt aliquid modi.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <SubscribeBtn>Subscribe</SubscribeBtn>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;
