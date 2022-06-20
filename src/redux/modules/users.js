import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";
import { localStorageGet, localStorageSet } from "../../shared/localStorage";

// actions
const GET_USER = "GET_USER";
const GET_NICKNAME = "GET_NICKNAME";
const SET_USER = "SET_USER";
const LOAD = "user/LOAD";
const LOG_OUT = "LOG_OUT";

// action creators
const getUser = createAction(GET_USER, (user) => ({ user }));
const getNickname = createAction(GET_NICKNAME, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const userInfo = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
};

// //navigate
const navigate = useNavigate;

//미들웨어
// Signup
export const SignupDB = (username, password, userNickname) => {
  return function (dispatch, getState) {
    console.log("가랏!");
    apis
      .signup(username, password, userNickname)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log("회원가입 실패", err);
      });
  };
};

//Login
export const loginDB = (username, password) => {
  console.log(username, password);
  return function (dispatch, getState) {
    console.log(username, password);
    apis
      .login(username, password)
      .then((res) => {
        console.log(res);
        const token = res.headers.authorization;
        const DecodedToken = jwt_decode(token);
        console.log(DecodedToken);
        localStorage.setItem("jwtToken", token);
        navigate("/");
        dispatch(
          setUser({
            username: username,
            nickname: DecodedToken.nickname,
          })
        );
        // localStorage.setItem("email", username);
        // localStorageSet("token", cookie);
        // console.log(setItem);
        console.log(localStorage);

        // console.log("토큰을 받았어!", username, _cookie)
        // cookies.set("username", username, { path: "/" });
        // cookies.set("token", cookie, `${cookie}`);
      })

      .catch((error) => {
        console.log(error);
      });
    dispatch(setUser({ username: username }));
  };
};

const loginCheck = () => {
  return function (dispatch, getState) {
    const username = localStorageGet("username");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(
        setUser({
          username: username,
        })
      );
    }
  };
};

export const NicknameDB = (nickname) => {
  return async function (dispatch) {
    try {
      console.log("닉네임 전송");
      const data = await apis.nicknameCheck(nickname);
      console.log(data);
      dispatch(getNickname(data));
    } catch (e) {
      console.log(`닉네임 전달 오류 발생!${e}`);
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
  return function (dispatch, getState) {
    dispatch(logOut());
    localStorage.removeItem("email");
    localStorage.removeItem("jwtToken");
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
        console.log(draft.user.username);
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
  getNickname,
};
export { actionCreators };
