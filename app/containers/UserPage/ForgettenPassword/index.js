// React
import React from "react";

// Tools
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

// Component
import { DivInput, Input, Button } from "../../../components/Input/input";
import { ChildContainer, Title } from "../../../Components/Theme/appTheme";

function ForgettenPassword() {
  const notify = () => toast("Wow so easy!");
  function SendEmail() {
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
      <Button onClick={notify}>Envoyer</Button>
    </ChildContainer>
  );
}

export default ForgettenPassword;
