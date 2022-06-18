import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import { localStorageGet, localStorageSet } from "../../shared/localStorage";

// actions
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const LOAD = "user/LOAD";
const LOG_OUT = "LOG_OUT";

// action creators
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const userInfo = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
};

//navigate
const navigate = useNavigate;

//미들웨어
// Signup
export const SignupDB = (username, password, userNickname) => {
  return function (dispatch, getState) {
    console.log("회원가입 시도");
    apis
      .signup(username, password, userNickname)
      .then((res) => {
        console.log(res);
        alert(res.data.result);
        console.log(res);
        navigate.replace("/");
      })
      .catch((err) => {
        window.alert("다시 시도해주세요.");
        console.log("회원가입 실패");
      });
  };
};

//Login
const loginDB = (username, password) => {
  console.log(username, password);
  return function (dispatch, getState) {
    apis
      .login(username, password)

      .then((res) => {
        console.log(res.data.token);
        const cookie = res.data.token;
        const DecodedToken = jwt_decode(cookie);
        console.log(DecodedToken);
        localStorage.setItem("jwtToken", cookie);
        dispatch(
          setUser({
            username: username,
            nickname: DecodedToken.nickname,
          })
        );
        localStorage.setItem("email", username);
        // localStorageSet("token", cookie);
        // console.log(setItem);
        console.log(localStorage);

        //    console.log("토큰을 받았어!", userEmail, _cookie)
        // cookies.set("userEmail", userEmail, { path: "/" });
        // cookies.set("token", cookie, `${cookie}`);
      })

      .catch((error) => {
        console.log(error);
        alert("없는 회원정보 입니다! 회원가입을 해주세요!");
      });
    dispatch(setUser({ username: username }));
  };
};

const loginCheck = () => {
  return function (dispatch, getState) {
    const userEmail = localStorageGet("useremail");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(
        setUser({
          userEmail: userEmail,
        })
      );
    }
  };
};

export const userInfoDB = () => {
  return async function (dispatch) {
    try {
      console.log("얍");
      const data = await apis.userInfo();
      console.log(data);
      dispatch(userInfo(data));
    } catch (e) {
      console.log(`유저정보 조회 오류 발생!${e}`);
    }
  };
};

export const logoutDB = () => {
  return function (dispatch, getState, { navigate }) {
    dispatch(logOut());
    localStorage.removeItem("email");
    localStorage.removeItem("jwtToken");
    navigate.replace("/");
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
        console.log(draft.user.userEmail);
        draft.uploading = false;
        console.log("리듀서로 적용 완료", state, action.payload);
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
const actionCreators = {
  SignupDB,
  loginDB,
  logoutDB,
  loginCheck,
};
export { actionCreators };
