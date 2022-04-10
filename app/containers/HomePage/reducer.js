/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from "immer";
import { CLOSE_MENU } from "./constants";

// The initial state of the App
export const initialState = {
  menu: false
};

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLOSE_MENU:
        return state.set("menu", action.content);
    }
  });

export default homeReducer;
