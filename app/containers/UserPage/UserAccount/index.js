//React
import React, { useState, memo } from "react";

// Redux
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

// action - reducer - selectors
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectUser
} from "../../App/selectors";
import { Disconnect, ChangeUserName } from "../../App/actions";

//Tools
import styled from "styled-components";
import history from "../../../utils/history";

//Media
import check from "../../../media/check.svg";
import modify from "../../../media/modify.svg";
import edit from "../../../media/edit.svg"

//Components
import Avatar from "./avatar"

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
  transition: all 0.5s;
  box-shadow: 0px 5px 30px 2px black;

  &:hover {
  }
`;

const NameAndImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;

  width: 100%;
  height: auto;
`;

const DivProfilePicture = styled.div`
  display: flex;
  background-color: gray;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`
const ProfilePicture = styled.img`
`;

const ModifyProfilePicture = styled(DivProfilePicture)`
  opacity: 0;
  background-color: black;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    opacity: 0.6;
  }
`

const EditLogo = styled.img`
  width: 30px;
  height: 30px;
  &:hover {
    opacity: 1;
  }
`

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
  margin-top: 5px;

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

const DisconnectButton = styled.div`
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
  height: ${props => props.height};
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid;
  border-color: ${props => props.error ? "red" : "#00e3ff"};
  border-radius: 5px;
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
  transition: border-color 0.6s, background-color 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    
  }

  &::placeholder {
    opacity: 1;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ModifyInput = styled.input`
  all: unset;
  width: 100%;
  padding-left: 10px;
  cursor: text;
`;

const Validation = styled.div`
  display: flex;
  justify-content: cetner;
  align-items: center;
  padding-right: 3px;
  width: ${props => props.width};
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

const CheckLogo = styled.img`
  height: 30px;
  width: 30px;
  transition: all 0.4s;

  &:hover {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
  }
`;

function UserAccount({user, Disconnect}) {
  const [modifyInformation, setModifyIformation] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [emptyUsername, setEmptyUsername] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [modifyName, setModifyName] = useState(false);
  const [isOpenSelection, setIsOpenSelection] = useState(false);

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
    ChangeUserName()
    setModifyName(false);
  }

  function handleUsernameChange(username) {
    setUsername(username)
    !username ?
    setEmptyUsername(true)
    : setEmptyUsername(false)
  }

  function logOut() {
    Disconnect();
    history.push('/Connexion')
  }

  function openSelection() {
    setIsOpenSelection(true)
  }

  function closeSelection() { 
    isOpenSelection ?
    setIsOpenSelection(false)
    : null
  }

  return (
    <UserContainer onClick={() => closeSelection()}>
        <Avatar onClick={e => e.stopPropagation()} isOpen={isOpenSelection}/>
      <UserCard>
        <NameAndImage>
          <DivProfilePicture>
            <ProfilePicture />
            <ModifyProfilePicture onClick={() => openSelection()}>
              <EditLogo src={edit} />
            </ModifyProfilePicture>
          </DivProfilePicture>
          <Name>
            {modifyName ? 
              <InputDiv height="40px" error={emptyUsername}>
                <ModifyInput value={username} onChange={e => handleUsernameChange(e.target.value)} />
                <Validation width="40px" onClick={() => HandleChangeName()} >
                  <CheckLogo src={check} />
                </Validation>
              </InputDiv>
            : 
              user.username
            }
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
            E-Mail : {" "}
            {modifyInformation ? 
              <InputDiv style={{ width: "50%", justifyContent: "center" }}>
                <ModifyInput value={user.email} />
              </InputDiv>
            : 
              user.email
            }
          </Information>
          <Information>Coin : {Coin} </Information>
          <Information>
            Date de création du compte : {creationDateTime}
          </Information>
          <Information>Follower depuis : {followSince}</Information>
        </UserInformation>
        <CardFooter>
          <ChangePassword>Changer de mot de passe</ChangePassword>
          <DisconnectButton onClick={() => logOut()}>Deconnexion</DisconnectButton>
        </CardFooter>
      </UserCard>
    </UserContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  user: makeSelectUser()
});

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ChangeUserName,
      Disconnect
    }, dispatch
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(UserAccount);
