import React from "react";
import { styled } from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
font-size : 18px;
font-weight : 400;
color : ${({theme}) => theme.text};
margin-top : 20px;
margin-bottom : 10px;
`;


const Details = styled.div`
display : flex;
align-items : center;
justify-content : space-between;
`;

const Info = styled.span`
 color : ${({theme})=> theme.textSoft};
`;

const Buttons = styled.div`
display : flex;
gap :20px;
color : ${({theme})=> theme.textSoft};

`;

const Button = styled.div`
background-color : ${({theme})=> theme.bgLighter};
padding : 8px 20px;
border-radius : 20px;
display: flex;
align-items : center;

`;

const Recommendation = styled.div`
  flex: 2;
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
            <Info>2.4M views  1 day ago</Info>
            <Buttons>
                <Button><ThumbUpOutlinedIcon/>123</Button>
                <Button><ThumbDownOutlinedIcon/></Button>
                <Button><ReplyOutlinedIcon/></Button>
                <Button><SaveAltOutlinedIcon/></Button>
            </Buttons>
        </Details>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;
