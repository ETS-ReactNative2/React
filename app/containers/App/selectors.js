/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.user,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

  const makeSelectSuccess = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.success,
  );

  const makeSelectIsConnected = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isConnected,
  );

export {
  selectGlobal,
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectSuccess,
  makeSelectIsConnected,
};
