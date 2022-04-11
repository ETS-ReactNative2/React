import { fromJS } from 'immutable';

// The initial state of the App
export const initialState = fromJS({
  user: false,
  loading: false
});

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_START':
      console.log('reducer');
      return state.set("loading", true);
    break;
    default:
			return state;
  }
}

export default UserReducer;