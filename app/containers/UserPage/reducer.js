import produce from "immer";
import { CLOSE_MENU } from "./constants";

// The initial state of the App
export const initialState = {
  User: false
};

const UserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLOSE_MENU:
        return state.set("menu", action.content);
    }
  });

export default UserReducer;