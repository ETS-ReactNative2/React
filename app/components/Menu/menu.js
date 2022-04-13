import styled from "styled-components";

export const CloseMenu = styled.img`
  position: absolute;
  z-index: 9999;

  width: 70px;
  height: 70px;

  margin-top: 20px;

  cursor: pointer;

  transition: transform 500ms;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const Menu = styled.div`
  position: absolute;

  text-align: center;
  font-size: 3vw;
  line-height: 60px;

  color: white;

  transition: transform 500ms;
`;
export const FirstLetter = styled.span`
  color: #ff06fe;

  transition: color 250ms;
`;
export const ClassAnimation = styled.div`
  margin-bottom: 30px;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;

  background: linear-gradient(to top, #ff06fe, #ff06fe);
  background-size: 25% 2px;
  background-position: bottom;
  background-repeat: no-repeat;

  transition: background-size 500ms, line-height 500ms, padding-bottom 500ms,
    padding-top 500ms;

  &:hover {
    background-size: 80% 2px;

    padding-bottom: 15px;
    padding-top: 15px;
  }
`;
