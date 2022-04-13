// React
import { Link } from "react-router-dom";
import React, { useState, memo } from "react";

// Redux
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { useInjectReducer } from "utils/injectReducer";

// Tools
import styled from "styled-components";

// Components
import {
  Input,
  MaskPassword,
  DivInput,
  Button,
  DivMask,
  ErrorMessage
} from "../../../components/Input/input";
import { ChildContainer, Title } from "../../../components/Theme/appTheme";

// Media
import closeEye from "../../../media/closeEye.svg";
import eye from "../../../media/eye.svg";

//action - reducer - selectors
import reducer from "../../App/reducer";
import { Login, NotificationSend } from '../../App/actions'
import { makeSelectLoading, makeSelectError, makeSelectSucces } from "../../App/selectors";

const ClickableText = styled.div`
  margin: 0px 15px 0 15px;

  color: white;
  font-size: 12px;
  text-decoration: underline;

  white-space: break-spaces;
  cursor: pointer;
`;

const ClickableTextInscription = styled(ClickableText)`
  margin-top: 15px;
  text-decoration: none;
  cursor: inherit;

  .link {
    color: #00e3ff;
    font-weight: bold;
    cursor: pointer;
  }
`

const DivClickableText = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  min-width: 25%
`;

const key = "Login";

function ConnexionPage() {
  useInjectReducer({ key, reducer });

  const [passwordShown, setPasswordShown] = useState(true);
  const [emptyUsername, setEmptyUsername] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [user, setUser] = useState({});

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleUsernameChange = username => {
    setUser({...user, username: username})
    username ?
    setEmptyUsername(false)
    : null
  };
  const handlePasswordChange = password => {
    setUser({...user, password: password})
    password ?
    setEmptyPassword(false)
    : null
  };

  const connectUser = () => {
    if (user.username && user.password) {
      setEmptyUsername(false)
      setEmptyPassword(false)
      setUser({ username: "", email: "", password: ""})
      Login(user)
    } else {
      if (!user.username) {
        setEmptyUsername(true)
      }
      if (!user.password) {
        setEmptyPassword(true)
      }
    }
  } 

  return (
    <ChildContainer>
      <Title>Connecte-toi à ton compte</Title>
      <DivInput>
        <Input placeholder="Pseudo" value={user.username} onChange={e => handleUsernameChange(e.target.value)} />
      </DivInput>
      {emptyUsername ?
        <ErrorMessage>Ce Champ est obligatoire</ErrorMessage>
        : null
      }
      <DivInput>
        <Input
          type={passwordShown ? "password" : "text"}
          placeholder="Mot de passe"
          value={user.password}
          onChange={e => handlePasswordChange(e.target.value)}
        />
        <DivMask>
          <MaskPassword
            src={passwordShown ? eye : closeEye}
            onClick={togglePassword}
            alt="Eye"
          />
        </DivMask>
      </DivInput>
      {emptyPassword ?
        <ErrorMessage>Ce Champ est obligatoire</ErrorMessage>
        : null
      }
      <DivClickableText>
        <Link to="/ForgettenPassword" style={{ all: "unset" }}>
          <ClickableText>Mot de passe oublié ?</ClickableText>
        </Link>
      </DivClickableText>
        <Button type="submit" onClick={() => connectUser()}>Connexion</Button>
      <ClickableTextInscription>
      Pas encore de compte ?
        <Link to="/Register" style={{ all: "unset" }}>
          <span className="link"> Inscris toi</span>
        </Link>
      </ClickableTextInscription>
    </ChildContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  succes: makeSelectSucces(),
});

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    Login,
    NotificationSend
	}, dispatch)
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ConnexionPage);
