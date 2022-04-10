/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
// Tools
import styled from "styled-components";

import React, { memo } from "react";
import PropTypes from "prop-types";
// import { Helmet } from 'react-helmet';
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

// Styled component

// Media

import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from "containers/App/selectors";
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
import { loadRepos } from "../App/actions";
import { closeMenu } from "./actions";
import { makeSelectMenu } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

const key = "home";

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });


  return (
    <div>
      <Logo src={logo} alt="Logo" />
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectMenu(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

export function mapDispatchToProps(dispatch) {
  return {
    closeMenu: evt => dispatch(closeMenu())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(HomePage);
