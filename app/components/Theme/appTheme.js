import styled from "styled-components";

export const VideoBackground = styled.video`
  object-fit: cover;
  z-index: -1;

  width: 100vw;
  height: 100vh;

  position: fixed;

  top: 0;
  left: 0;
`;

export const Logo = styled.img`
  position: fixed;

  width: 20%;
  height: auto;

  top: 38%;
  left: 50%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChildContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  text-align: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin: 0;
  color: white;
`;
