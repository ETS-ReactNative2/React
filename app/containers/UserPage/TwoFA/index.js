// React
import React from "react";

// Components
import { Input, DivInput, Button } from "../../../components/Input/input";
import { ChildContainer, Title } from "../../../Components/Theme/appTheme";

function TwoFA() {
  return (
    <ChildContainer>
      <Title>Entre le code que tu as reçu</Title>
      <DivInput>
        <Input placeholder="Code de vérification" />
      </DivInput>
      <Button>Valider</Button>
    </ChildContainer>
  );
}

export default TwoFA;
