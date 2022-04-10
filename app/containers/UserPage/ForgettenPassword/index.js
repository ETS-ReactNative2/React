// React
import React from "react";

// Tools
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import { useNavigate } from "react-router-dom";

// Component
import { DivInput, Input, Button } from "../../../components/Input/input";
import { ChildContainer, Title } from "../../../Components/Theme/appTheme";

function ForgettenPassword() {
  function SendEmail() {
    NotificationManager.success("", "E-mail envoyé !");
    setTimeout(Return(), 3000);
  }

  function Return() {
    const navigate = useNavigate();
    navigate("/Connexion");
  }

  return (
    <ChildContainer>
      <Title>Entrez votre e-mail</Title>
      <DivInput>
        <Input placeholder="E-mail" />
      </DivInput>
      <Button onClick={() => SendEmail()}>Envoyer</Button>
      <NotificationContainer />
    </ChildContainer>
  );
}

export default ForgettenPassword;
