import React, { useReducer } from "react";
import authContext from "./authContext.js";
import axios from "axios";
import authReducer from "./authReducer";
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  // USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  // USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  // USER_DETAILS_RESET,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  // GET_USER_BY_ID,
} from "../types.js";

const AuthState = (props) => {
  const initialState = {
    users: null,
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    userInfo: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };

    // console.log(config);

    try {
      const res = await axios.get("/api/user", config);

      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_DETAILS_FAIL,
      });
    }
  };
  // Login User

  const login = async (email, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      // console.log(res.data);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
      alert("Login Successful");
      loadUser();
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.response.data.msg,
      });
      alert("Wrong Email/Password");
    }
  };

  //register User

  const register = async (name, email, phone, isPM, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const res = await axios.post(
        "/api/user/",
        { name, email, phone, isPM, password },
        config
      );
      console.log(res.data);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
    console.log(name, email, phone, isPM, password);
  };

  // Logout
  const logout = () => {
    dispatch({
      type: USER_LOGOUT,
    });
    document.location.href = "/login";
  };

  //loadAllUsers
  const loadAllUsers = async () => {
    await axios
      .get("/api/user/all-users")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: USER_LIST_SUCCESS, payload: res.data });
      })
      .catch((err) => dispatch({ type: USER_LIST_FAIL, payload: err.msg }));
  };

  //Get user by id
  const getUserById = async (id) => {
    console.log(id, "jayesh");
    // await axios
    //   .get(`/api/user/${id}`)
    //   .then((res) => {
    //     console.log(res.data, "getuser");
    //     dispatch({ type: GET_USER_BY_ID, payload: res.data });
    //   })
    //   .catch((err) => dispatch({ type: USER_DETAILS_FAIL, payload: err.msg }));
  };

  return (
    <authContext.Provider
      value={{
        users: state.users,
        token: state.token,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        userInfo: state.userInfo,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        loadAllUsers,
        getUserById,
        logout,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
