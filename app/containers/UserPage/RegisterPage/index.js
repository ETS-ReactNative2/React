// React
import React, { useState } from "react";

// Redux

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

function RegisterPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleUsernameChange = username => {
    console.log("username");
    setUserName(username);
  };
  const handleEmailChange = email => {
    console.log("email");
    setEmail(email);
  };
  const handlePasswordChange = password => {
    console.log("password");
    setPassword(password);
  };

  const sendNewUser = () => {
    console.log("tt", username, email, password);
    newUser(username, email, password);
  };

  return (
    <ChildContainer>
      <Title>Inscrit toi !</Title>
      <DivInput>
        <Input placeholder="Pseudo" onChange={e => handleUsernameChange(e)} />
      </DivInput>
      <DivInput>
        <Input placeholder="E-mail" onChange={e => handleEmailChange(e)} />
      </DivInput>
      <DivInput>
        <Input
          type={passwordShown ? "password" : "text"}
          placeholder="Mot de passe"
          onChange={e => handlePasswordChange(e)}
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

export default RegisterPage;
