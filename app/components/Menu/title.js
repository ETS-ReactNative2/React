import styled from "styled-components";

export const Title = styled.h1`
  position: absolute;

  z-index: 9999;

  cursor: pointer;

  background: linear-gradient(to right, #ff06fe 66%, white 10%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 800ms ease, background 800ms ease;

  font-size: 40px;

  &:hover {
    background-position: 0;
  }
`;
