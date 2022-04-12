/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import userReducer from './containers/UserPage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    user: userReducer,
    language: languageProviderReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
