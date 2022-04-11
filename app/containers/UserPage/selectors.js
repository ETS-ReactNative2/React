import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectUser = state => state.get('user', initialState);
const makeSelectLoading = () => createSelector(selectUser, userState => userState.get('loading'));


export { selectUser, makeSelectLoading };