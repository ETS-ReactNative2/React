// React
import React, { useState, memo } from "react";

// Redux
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { useInjectReducer } from "utils/injectReducer";
import reducer from "../reducer";

//action
import { Register } from '../actions'

// Components
import {
  Input,
  MaskPassword,
  DivInput,
  Button,
  DivMask
} from "../../../components/Input/input";
import { ChildContainer, Title } from "../../../Components/Theme/appTheme";

// Media
import closeEye from "../../../media/closeEye.svg";
import eye from "../../../media/eye.svg";
import { makeSelectLoading } from "../selectors";

const key = "register";

function RegisterPage({Register, loading}) {

  useInjectReducer({ key, reducer });

  console.log('load', loading);
  const [passwordShown, setPasswordShown] = useState(false);
  const [user, setUser] = useState({});

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleUsernameChange = username => {
    setUser({...user, username: username});
  };
  const handleEmailChange = email => {
    setUser({...user ,email: email});
  };
  const handlePasswordChange = password => {
    setUser({...user ,password: password});
  };

  const sendNewUser = () => {
    Register(user);
  };

  return (
    <ChildContainer>
      <Title>Inscrit toi !</Title>
      <DivInput>
        <Input placeholder="Pseudo" value={user.username} onChange={e => handleUsernameChange(e.target.value)} />
      </DivInput>
      <DivInput>
        <Input placeholder="E-mail" value={user.email} onChange={e => handleEmailChange(e.target.value)} />
      </DivInput>
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
      <Button style={{ marginTop: "40px" }} onClick={() => sendNewUser()}>
        Inscription
      </Button>
    </ChildContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading()
});

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    Register
  },
  dispatch
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(RegisterPage);
