/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from "immer";
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from "./constants";

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  user: false,
  success: false,
  isConnected: false
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.loading = false;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case "REGISTER_START":
        draft.loading = true;
        draft.error = false;
        break;

      case "REGISTER_ERROR":
        draft.loading = false;
        draft.error = action.payload;
        break;

      case "REGISTER_END":
        draft.loading = false;
        draft.success = true;
        break;

      case "NOTIFICATION_SEND":
        draft.success = false;
        break;

      case "LOGIN_START":
        draft.loading = true;
        draft.error = false;
        break;

      case "LOGIN_ERROR":
        draft.loading = false;
        draft.error = action.payload;
        break;

      case "LOGIN_END":
        draft.loading = false;
        draft.success = true;
        draft.isConnected = true;
        draft.user = action.payload;
        break;

      case "DISCONNECT":
        draft.user = false;
        draft.isConnected = false;
    }
  });

export default appReducer;
