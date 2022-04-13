/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
// Tools
import styled from "styled-components";

import React from "react";

// Styled component

// Media

import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import logo from "../../media/cryserLogo.png";
import { Logo } from "../../components/Theme/appTheme";
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
import reducer from "./reducer";
import saga from "./saga";

const key = "home";

function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Logo src={logo} alt="Logo" />
    </div>
  );
}

export default HomePage;
