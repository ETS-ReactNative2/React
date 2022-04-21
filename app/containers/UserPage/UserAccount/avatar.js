//React
import React from "react";

//Tools
import styled from "styled-components"

//Media
import defaultAvatar from "../../../media/avatar/defaultAvatar.png"

const Popup = styled.div`
  width: 60%;
  height: 40%;
  background-color: black;
  position: absolute;
  border-radius: 10px;
  z-index: 2;
  box-shadow: 0px 0px 50px black;
  transform: scale(${props => props.isOpen ? "1" : "0.5"});
  transition: all 0.3s;
  opacity: ${props => props.isOpen ? "1" : "0"};
`

const DivProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 40px 40px 0px;
  cursor: pointer;
  transition: all 0.4s;
  
  &:hover {
    transform: scale(1.4);
  }
`

const Title = styled.div`
  padding-top: 20px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const AvatarImg = styled.img`
  width: 70%;
  height: 70%;
`

function Avatar(isOpen) {

  console.log('open', isOpen.isOpen)
  return(
    <Popup isOpen={isOpen.isOpen}>
      <Title>Choisi ton Avatar</Title>
      <DivProfilePicture>
        <AvatarImg src={defaultAvatar}></AvatarImg>
      </DivProfilePicture>
    </Popup>
  )
}

export default Avatar;