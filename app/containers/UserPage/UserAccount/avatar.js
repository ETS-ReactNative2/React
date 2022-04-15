//React
import React from "react";

//Tools
import styled from "styled-components"

//Media
import defaultAvatar from "../../../media/avatar/defaultAvatar.png"

const Popup = styled.div`
  width: 60%;
  height: 40%;
  background-color: #020e19;
  position: absolute;
  border-radius: 10px;
  z-index: 2;
  box-shadow: 0px 0px 50px black;
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
    width: 120px;
    height: 120px;
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

function Avatar() {

  return(
    <Popup>
      <Title>Choisi ton Avatar</Title>
      <DivProfilePicture>
        <AvatarImg src={defaultAvatar}></AvatarImg>
      </DivProfilePicture>
    </Popup>
  )
}

export default Avatar;