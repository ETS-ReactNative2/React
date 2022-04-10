import React, { useState } from "react";
import styled from "styled-components";
import check from "../../../media/check.svg";
import modify from "../../../media/modify.svg";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

const UserContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const UserCard = styled.div`
  width: 40%;
  height: 75%;

  margin-top: 80px;
  border-radius: 10px;
  padding: 40px;

  background-color: #020e19;
`;

const NameAndImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;

  width: 100%;
  height: auto;
`;
const ProfilePicture = styled.img`
  background-color: white;

  width: 70px;
  height: 70px;

  border-radius: 40px;
`;

const Name = styled.div`
  color: white;

  padding-left: 20px;
  max-width: 60%;

  font-size: 40px;

  &::first-letter {
    color: #ff00ff;
  }
`;

const TwitchName = styled.div`
  color: white;

  font-size: 15px;

  &::first-letter {
    color: #ff00ff;
  }
`;

const ModifyButton = styled.img`
  margin-left: 20px;
  margin-bottom: 15px;
  cursor: pointer;

  width: 15spx;
  height: 15px;
`;

const UserInformationTitle = styled.div`
  display: flex;
  align-items: center;
  color: white;

  margin-top: 40px;
  font-size: 25px;
`;

const UserInformation = styled.div`
  width: 100%;
`;

const Information = styled.div`
  color: white;

  margin-top: 20px;

  font-size: 20px;

  &::first-letter {
    color: #ff00ff;
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: flex-row;
  justify-content: space-around;

  width: 100%;
  margin-top: 20px;

  color: white;
`;

const ChangePassword = styled.div`
  min-width: 5%;

  margin-top: 10px;

  font-size: 15px;
  color: #ff00ff;

  border: 2px solid;
  border-color: #ff00ff;
  border-radius: 5px;

  padding: 5px 20px;

  cursor: pointer;

  transition: border-color 500ms, color 500ms;

  &:hover {
    border-color: #00e3ff;
    color: #00e3ff;
  }
`;

const Disconnect = styled.div`
  min-width: 5%;

  margin-top: 10px;

  font-size: 15px;
  color: #ff00ff;

  border: 2px solid;
  border-color: #ff00ff;
  border-radius: 5px;

  padding: 5px 20px;

  cursor: pointer;

  transition: border-color 500ms, color 500ms;

  &:hover {
    border-color: #00e3ff;
    color: #00e3ff;
  }
`;

const InputDiv = styled.div`
  display: flex;

  min-width: 10%;
  height: 5%;

  background-color: rgba(255, 255, 255, 0.3);

  border: 1px solid;
  border-color: #00e3ff;
  border-radius: 5px;

  font-size: 20px;
  text-align: center;
  color: white;

  transition: background-color 250ms;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &::placeholder {
    opacity: 1;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ModifyInput = styled.input`
  all: unset;
`;

const Validation = styled.div`
  justify-content: flex-end;
  align-item: flex-start;

  width: 30px;
  height: 100%;
  background-color: green;
  border-radius: 5px;
`;

const CheckLogo = styled.img``;

function UserAccount() {
  const [modifyInformation, setModifyIformation] = useState(false);
  const [modifyName, setModifyName] = useState(false);

  const userName = "UserName";
  const eMail = "ferfzef@gmail.com";
  const Coin = 431;
  const creationDateTime = "12/01/2022";
  const followSince = "01/01/2021";

  function ToggleModify() {
    setModifyIformation(!modifyInformation);
  }

  function ToggleModifyName() {
    setModifyName(!modifyName);
  }

  function HandleChangeName() {
    setModifyName(false);
    NotificationManager.success("", "Modification enregistré avec succès !");
  }

  return (
    <UserContainer>
      <UserCard>
        <NameAndImage>
          <ProfilePicture />
          <Name>
            {modifyName ? (
              <InputDiv style={{ height: "30px" }}>
                <ModifyInput value={userName} />
                <Validation onClick={() => HandleChangeName()}>
                  <CheckLogo src={check} />
                </Validation>
              </InputDiv>
            ) : (
              userName
            )}
            <TwitchName>TwitchName</TwitchName>
          </Name>
          <ModifyButton src={modify} onClick={() => ToggleModifyName()} />
        </NameAndImage>
        <UserInformationTitle>
          Informations du compte
          <ModifyButton
            src={modify}
            style={{ marginRight: "10", marginBottom: "0" }}
            onClick={() => ToggleModify()}
          />
        </UserInformationTitle>
        <UserInformation>
          <Information>
            E-Mail :{" "}
            {modifyInformation ? (
              <InputDiv style={{ width: "50%", justifyContent: "center" }}>
                <ModifyInput value={eMail} />
              </InputDiv>
            ) : (
              eMail
            )}
          </Information>
          <Information>Coin : {Coin} </Information>
          <Information>
            Date de création du compte : {creationDateTime}
          </Information>
          <Information>Follower depuis : {followSince}</Information>
        </UserInformation>
        <CardFooter>
          <ChangePassword>Changer de mot de passe</ChangePassword>
          <Disconnect>Deconnexion</Disconnect>
        </CardFooter>
      </UserCard>
      <NotificationContainer />
    </UserContainer>
  );
}

export default UserAccount;
