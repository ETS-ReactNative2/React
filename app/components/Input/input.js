import styled from "styled-components";

export const Input = styled.input`
  all: unset;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.3);
  transition: background-color 250ms;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const MaskPassword = styled.img`
  position: absolute;

  width: 30px;

  cursor: pointer;
`;

export const DivInput = styled.div`
  display: flex;

  min-width: 25%;
  height: 5%;

  margin-top: 20px;

  border: 3px solid;
  border-color: #00e3ff;
  border-radius: 5px;

  font-size: 20px;
  text-align: center;
  color: white;
`;

export const Button = styled.div`
  border: 2px solid;
  border-color: #ff00ff;
  border-radius: 5px;
  color: #ff00ff;
  cursor: pointer;
  font-size: 25px;
  min-width: 10%;
  margin-top: 25px;
  padding: 5px 20px;
  transition: border-color 500ms, color 500ms;

  &:hover {
    border-color: #00e3ff;
    color: #00e3ff;
  }
`;

export const DivMask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.3);
  transition: background-color 250ms;

  width: 40px;
  height: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
