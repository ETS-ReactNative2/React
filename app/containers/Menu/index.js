/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

// Media

//Components
import { CloseMenu, FirstLetter, ClassAnimation, Menu } from '../../components/Menu/menu';
import { ChildContainer } from "../../components/Theme/appTheme";

//Tools
import styled from 'styled-components';

import React, { memo } from 'react';
import {  BrowserRouter as Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import close from '../../media/close.svg';
// import messages from './messages';
import { closeMenu } from '../HomePage/actions';
import { makeSelectMenu } from '../HomePage/selectors';
import reducer from '../HomePage/reducer';
import saga from '../HomePage/saga';

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const key = 'home';

export function HomeMenu() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const isConnected = false;

  return (
    <>
      <Center>
        <CloseMenu src={close} onClick={() => CloseMenuu()} />
        <ChildContainer>
          <Menu>
            <Link to="/" style={{ all: 'unset' }} onClick={() => CloseMenuu()}>
              <ClassAnimation>
                <FirstLetter>A</FirstLetter>ccueil
              </ClassAnimation>
            </Link>
            <Link
              to="/Planning"
              style={{ all: 'unset' }}
              onClick={() => CloseMenuu()}
            >
              <ClassAnimation>
                <FirstLetter>P</FirstLetter>lanning
              </ClassAnimation>
            </Link>
            {!isConnected ? (
              <Link
                to="/Connexion"
                style={{ all: 'unset' }}
                onClick={() => CloseMenuu()}
              >
                <ClassAnimation>
                  <FirstLetter>C</FirstLetter>onnexion
                </ClassAnimation>
              </Link>
                :
                <Link to="/Account" style={{all: "unset"}} onClick={() => CloseMenuu()}>
              >
                <ClassAnimation>
                  <FirstLetter>M</FirstLetter>on compte
                </ClassAnimation>
              </Link>
            )}
          </Menu>
        </ChildContainer>
      </Center>
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectMenu(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    closeMenu: evt => dispatch(closeMenu()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomeMenu);
