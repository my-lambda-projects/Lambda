import axios from "axios";
axios.defaults.withCredentials = true;
const ROOT_URL = "http://localhost:3000";

export const USER_REGISTERED = "USER_REGISTERED";
export const USER_AUTHENTICATED = "USER_AUTHENTICATED";
export const USER_UNAUTHENTICATED = "USER_UNAUTHENTICATED";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const GET_USERS = "GET_USERS";
export const CHECK_IF_AUTHENTICATED = "CHECK_IF_AUTHENTICATED";

export const authError = (error) => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error,
  };
};

export const register = (username, password, confirmPassword, history) => {
  return (dispatch) => {
    if (password !== confirmPassword) {
      dispatch(authError("Passwords do not match"));
      return;
    }
    axios
      .post(`${ROOT_URL}/users`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED,
        });
        history.push("/signin");
      })
      .catch((err) => {
        dispatch(authError("Failed to register user"));
      });
  };
};

export const login = (username, password, history) => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/login`, { username, password })
      .then(() => {
        dispatch({
          type: USER_AUTHENTICATED,
        });
        history.push("/users");
      })
      .catch(() => {
        dispatch(authError("Incorrect email/password combo"));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/logout`)
      .then(() => {
        dispatch({
          type: USER_UNAUTHENTICATED,
        });
      })
      .catch(() => {
        dispatch(authError("Failed to log you out"));
      });
  };
};

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get(`${ROOT_URL}/restricted/users`)
      .then((response) => {
        console.log("Get users response: ", response);
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch(authError("Failed to fetch users"));
      });
  };
};

export const checkIfAuthenticated = () => {
  return {
    type: CHECK_IF_AUTHENTICATED,
  };
};
