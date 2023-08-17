import React from "react";
import { styled, keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }

    to {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
`;

const Container = styled.div`
  margin : calc(100vh / 2 - 10vh) auto;
  

  animation: ${rotate} 2s linear infinite;

  &::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: #1c87c9;
    border-radius: 50%;
    content: "";
    height: 40px;
    width: 40px;
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }
`;

const Loader = () => {
  return <Container></Container>;
};

export default Loader;
