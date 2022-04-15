/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from "./constants";

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  };
}
export function Register(user) {
  return dispatch => {
    dispatch({ type: "REGISTER_START" });

    const data = {
      email: user.email,
      username: user.username,
      password: user.password,
      role: false
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(`http://localhost:8000/user/register`, requestOptions)
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          dispatch({ type: "REGISTER_ERROR", payload: res });
        } else {
          dispatch({ type: "REGISTER_END" });
        }
      });
  };
}

export function NotificationSend() {
  return dispatch => {
    dispatch({ type: "NOTIFICATION_SEND" });
  };
}

export function Login(user) {
  return dispatch => {
    dispatch({ type: "LOGIN_START" });

    const data = {
      username: user.username,
      password: user.password
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(`http://localhost:8000/user/login`, requestOptions)
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          dispatch({ type: "LOGIN_ERROR", payload: res });
        } else {
          dispatch({ type: "LOGIN_END", payload: res });
        }
      });
  };

}

export function Disconnect() {
  return dispatch =>  {
    dispatch({ type: "DISCONNECT"})
  }
}

export function ChangeUserName(username) {
  return dispatch => {
    dispatch({ type: "CHANGEUSERNAME_START" });

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(`http://localhost:8000/user/changeusername/${username}`, requestOptions)
      .then(response => response.json())
      .then(res => {
        console.log('res', res);
        if (res.error) {
          dispatch({ type: "CHANGEUSERNAME_ERROR", payload: res });
        } else {
          dispatch({ type: "CHANGEUSERNAME_END", payload: res });
        }
      });
  };
}