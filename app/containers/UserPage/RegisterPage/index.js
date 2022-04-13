// React
import React, { useState, memo, useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { useInjectReducer } from "utils/injectReducer";

//action - reducer - selectors
import reducer from "../../App/reducer";
import { Register, NotificationSend } from '../../App/actions'
import { makeSelectLoading, makeSelectError, makeSelectSucces } from "../../App/selectors";

// Components
import {
  Input,
  MaskPassword,
  DivInput,
  Button,
  DivMask,
  ErrorMessage
} from "../../../components/Input/input";
import { ChildContainer, Title } from "../../../Components/Theme/appTheme";
import Loading from "../../../components/Icon/loading"

// Media
import closeEye from "../../../media/closeEye.svg";
import eye from "../../../media/eye.svg";

//Tools
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

const key = "register";

function RegisterPage({Register, loading, error, succes, NotificationSend}) {

  useInjectReducer({ key, reducer });

  const [passwordShown, setPasswordShown] = useState(true);
  const [emptyUsername, setEmptyUsername] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [user, setUser] = useState({});

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleUsernameChange = username => {
    setUser({...user, username: username})
  };
  const handleEmailChange = email => {
    setUser({...user, email: email})
  };
  const handlePasswordChange = password => {
    setUser({...user, password: password})
  };

  const sendNewUser = () => {
    if (user.username && user.email && user.password) {
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_()'{}~\|=£¤µ])[A-Za-z\d@$!%*?&_()'{}~\|=£¤µ]{6,}$/
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      setEmptyUsername(false)
      setEmptyEmail(false)
      setEmptyPassword(false)
      if (user.email.match(regexEmail)) {
        if (user.password.match(regexPassword)) {
          setUser({ username: "", email: "", password: ""})
          setInvalidPassword(false)
          setInvalidEmail(false)
          Register(user)
        } else {
          setInvalidPassword(true)
        }
      } else {
        setInvalidEmail(true)
      }
    } else {
      if (!user.username) {
        setEmptyUsername(true)
      }
      if (!user.email) {
        setEmptyEmail(true)
      }  
      if (!user.password) {
        setEmptyPassword(true)
      }
    }
  };

  useEffect(() => {
    if (succes) {
      NotificationManager.success("", "Votre compte a bien été créer")
      NotificationSend()
    }
  })

  return (
    <ChildContainer>
      <NotificationContainer />
      <Title>Inscrit toi !</Title>
      <DivInput error={error}>
        <Input placeholder="Pseudo" value={user.username} onChange={e => handleUsernameChange(e.target.value)} />
      </DivInput>
      {error.username ?
        <ErrorMessage>Ce pseudo est déjà pris</ErrorMessage>
        : null
      }
      {emptyUsername ?
        <ErrorMessage>Ce Champ est obligatoire</ErrorMessage>
        : null
      }
      <DivInput error={error}>
        <Input placeholder="E-mail" value={user.email} onChange={e => handleEmailChange(e.target.value)} />
      </DivInput>
      {error.email ?
        <ErrorMessage>Cette E-mail est déjà pris</ErrorMessage>
        : null
      }
      {emptyEmail ?
        <ErrorMessage>Ce Champ est obligatoire</ErrorMessage>
        : null
      }
      {invalidEmail ?
        <ErrorMessage>Le format de l'E-mail est incorrect</ErrorMessage>
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
      {invalidPassword ?
        <ErrorMessage>Le mot de passe doit contenir au minimum 6 caractères, une majuscule, une minuscule, un caractère spécial et un chiffre </ErrorMessage>
        : null
      }
      {!loading ?
        <Button style={{ marginTop: "40px" }} onClick={() => sendNewUser()}>
          Inscription
        </Button>
      :
        <Loading />
      }
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
    Register,
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
)(RegisterPage);
