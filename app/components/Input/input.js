import styled from "styled-components";

export const Input = styled.input`
  all: unset;

  width: 100%;
  height: 100%;

  padding-left: 10px;

  border-radius: 2px;
  transition: background-color 250ms;
  cursor: text;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 1;
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
  height: 50px;

  margin-top: 30px;

  background: linear-gradient(
      to right,
      ${props => (props.error ? "red" : "#00e3ff")},
      ${props => (props.error ? "red" : "#00e3ff")}
    ),
    linear-gradient(
      to right,
      ${props => (props.error ? "red" : "#ff00ff")},
      ${props => (props.error ? "red" : "#00e3ff")}
    );
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  border-radius: 2px;

  font-size: 20px;
  text-align: left;
  color: white;

  &:hover {
    background-size: 0 0.1em, 100% 0.1em;
  }
`;

export const Button = styled.button`
  border: 2px solid;
  border-color: #ff00ff;
  border-radius: 5px;
  color: #ff00ff;
  cursor: pointer;
  font-size: 25px;
  min-width: 10%;
  margin-top: 25px;
  padding: 5px 20px;
  background-color: rgba(255, 255, 255, 0);
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

  width: 40px;
  height: 100%;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 17px;
  font-weight: 600;
`;
