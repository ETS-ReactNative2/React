import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectUser = state => state.user || initialState;

const makeSelectLoading = () =>
  createSelector( selectUser, userState => userState.loading);
const makeSelectUser = () =>
  createSelector( selectUser, userState => userState.user);


export { selectUser, makeSelectLoading, makeSelectUser };