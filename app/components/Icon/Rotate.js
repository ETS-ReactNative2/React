import styled, { keyframes } from "styled-components";
import React from "react";

const Wrapper = styled.div`
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const CircleKey = keyframes`
  0%{
    top:60px;
    height:5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40%{
    height:20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100%{
    top:0%;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: ${CircleKey} 0.5s alternate infinite ease;
`;

const Circle2 = styled(Circle)`
  left: 45%;
  animation-delay: 0.2s;
`;

const Circle3 = styled(Circle)`
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
`;

const ShadowKey = keyframes`
  0%{
    transform: scaleX(1.5);
  }
  40%{
    transform: scaleX(1);
    opacity: .7;
  }
  100%{
    transform: scaleX(.2);
    opacity: .4;
}
`;

const Shadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: ${ShadowKey} 0.5s alternate infinite ease;
`;

const Shadow2 = styled(Shadow)`
  left: 45%;
  animation-delay: 0.2s;
`;

const Shadow3 = styled(Shadow)`
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
`;

class Loading extends React.Component {
  render() {
    return (
      <Wrapper>
        <Circle />
        <Circle2 />
        <Circle3 />
        <Shadow />
        <Shadow2 />
        <Shadow3 />
      </Wrapper>
    );
  }
}

export default Loading;
