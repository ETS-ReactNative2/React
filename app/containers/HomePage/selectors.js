/**
 * Homepage selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHome = state => state.home || initialState;

const makeSelectMenu = () =>
  createSelector(
    selectHome,
    homeState => homeState.menu
  );

export { selectHome, makeSelectMenu };
