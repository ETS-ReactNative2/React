// React
import { Link } from "react-router-dom";
import React, { useState } from "react";

// Tools
import styled from "styled-components";

// Components
import {
  Input,
  MaskPassword,
  DivInput,
  Button,
  DivMask
} from "../../../components/Input/input";
import { ChildContainer, Title } from "../../../components/Theme/appTheme";

// Media
import closeEye from "../../../media/closeEye.svg";
import eye from "../../../media/eye.svg";

const ClickableText = styled.div`
  margin: 15px 15px 0 15px;

  color: white;
  font-size: 12px;
  text-decoration: underline;

  white-space: break-spaces;

  cursor: pointer;
`;
const DivClickableText = styled.div`
  display: flex;
  flex-direction: row;
`;

function ConnexionPages() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <ChildContainer>
      <Title>Connecte-toi à ton compte</Title>
      <DivInput>
        <Input placeholder="Pseudo" />
      </DivInput>
      <DivInput>
        <Input
          type={passwordShown ? "password" : "text"}
          placeholder="Mot de passe"
        />
        <DivMask>
          <MaskPassword
            src={passwordShown ? eye : closeEye}
            onClick={togglePassword}
            alt="Eye"
          />
        </DivMask>
      </DivInput>
      <DivClickableText>
        <Link to="/ForgettenPassword" style={{ all: "unset" }}>
          <ClickableText>Mot de passe oublié</ClickableText>
        </Link>
        <Link to="/Register" style={{ all: "unset" }}>
          <ClickableText>Inscription</ClickableText>
        </Link>
      </DivClickableText>
      <Link to="/2FA" style={{ all: "unset" }}>
        <Button>Connexion</Button>
      </Link>
    </ChildContainer>
  );
}

export default ConnexionPages;
