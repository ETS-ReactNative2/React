/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// React
import React, { useState, memo } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

// Tools
import styled from "styled-components";

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import Home from "containers/HomePage/Loadable";
import Planning from "containers/planning/Loadable";
import ConnexionPages from "containers/UserPage/ConnexionPage/Loadable";
import UserAccount from "containers/UserPage/UserAccount/Loadable";
import ForgettenPassword from "containers/UserPage/ForgettenPassword/Loadable";
import RegisterPage from "containers/UserPage/RegisterPage/Loadable";
import TwoFA from "containers/UserPage/TwoFA/Loadable";

// Media
import close from "../../media/close.svg";
import background from "../../media/background.mp4";

// Components
import { Title } from "../../components/Menu/title";
import {
  CloseMenu,
  FirstLetter,
  ClassAnimation,
  Menu
} from "../../components/Menu/menu";
import {
  VideoBackground,
  ChildContainer
} from "../../components/Theme/appTheme";
import GlobalStyle from "../../global-styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function OpenMenu() {
    setIsMenuOpen(true);
  }

  function CloseMenuu() {
    setIsMenuOpen(false);
  }

  const isConnected = false;

  return (
    <Container>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Cryser">
        <meta name="Home/Menu" content="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <VideoBackground autoPlay loop>
        <source src={background} type="video/mp4" />
      </VideoBackground>

      {!isMenuOpen ? 
        <>
          <Title onClick={() => OpenMenu()}>Menu</Title>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Planning" component={Planning} />
            <Route exact path="/Connexion" component={ConnexionPages} />
            <Route exact path="/Account" component={UserAccount} />
            <Route
              exact
              path="/ForgettenPassword"
              component={ForgettenPassword}
            />
            <Route exact path="/Register" component={RegisterPage} />
            <Route exact path="/2FA" component={TwoFA} />
          </Switch>
        </>
        : 
        <>
          <CloseMenu src={close} onClick={() => CloseMenuu()} />
          <ChildContainer>
            <Menu>
              <Link
                to="/"
                style={{ all: "unset" }}
                onClick={() => CloseMenuu()}
              >
                <ClassAnimation>
                  <FirstLetter>A</FirstLetter>ccueil
                </ClassAnimation>
              </Link>
              <Link
                to="/Planning"
                style={{ all: "unset" }}
                onClick={() => CloseMenuu()}
              >
                <ClassAnimation>
                  <FirstLetter>P</FirstLetter>lanning
                </ClassAnimation>
              </Link>
              {!isConnected ? 
                <Link
                  to="/Connexion"
                  style={{ all: "unset" }}
                  onClick={() => CloseMenuu()}
                >
                  <ClassAnimation>
                    <FirstLetter>C</FirstLetter>onnexion
                  </ClassAnimation>
                </Link>
                : 
                <Link
                  to="/Account"
                  style={{ all: "unset" }}
                  onClick={() => CloseMenuu()}
                >
                  <ClassAnimation>
                    <FirstLetter>M</FirstLetter>on compte
                  </ClassAnimation>
                </Link>
              }
            </Menu>
          </ChildContainer>
        </>
      }
      <GlobalStyle />
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(App);
