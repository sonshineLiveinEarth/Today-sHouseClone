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
const LOAD_NICKNAME = "LOAD_NICKNAME";
const LOG_OUT = "LOG_OUT";

// action creators
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const loadNickname = createAction(LOAD_NICKNAME, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

export const getNickname = (data) => {
  return { type: GET_NICKNAME, data };
};

// initialState
const initialState = {
  message: null,
  user: null,
  nickname: null,
};

//미들웨어
// Signup
export const SignupDB = (username, password, userNickname) => {
  return function (dispatch, getState) {
    console.log("가랏!");
    apis
      .signup(username, password, userNickname)
      .then((res) => {
        console.log(res);
        window.alert("환영합니다!");
        window.location.assign("/");
      })
      .catch((err) => {
        console.log("회원가입 실패", err);
        dispatch(getNickname(err));
      });
  };
};

//Login
export const loginDB = (username, password) => {
  console.log(username, password);
  return function (dispatch, getState, history) {
    console.log(username, password);
    apis
      .login(username, password)
      .then((res) => {
        console.log(res);
        const token = res.headers.authorization;
        const DecodedToken = jwt_decode(token);
        console.log(DecodedToken);
        localStorage.setItem("jwtToken", token);
        window.alert("환영합니다!");
        window.location.assign("/");
        dispatch(
          setUser({
            username: username,
            nickname: DecodedToken.nickname,
          })
        );
        localStorage.setItem("username", username);
        localStorage.setItem("nickname", DecodedToken.nickname);
      })

      .catch((err) => {
        console.log(err);
        window.alert("잘못된 회원정보입니다.");
      });
    dispatch(setUser({ username: username }));
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
      dispatch(getNickname(e));
    }
  };
};

export const LoadNicknameDB = () => {
  return async function (dispatch) {
    try {
      console.log("닉네임 전송");
      const data = await apis.loadnickname();
      console.log(data.data);
      dispatch(loadNickname(data.data));
    } catch (e) {
      console.log(`닉네임 전달 오류 발생!${e}`);
      dispatch(getNickname(e));
    }
  };
};

export const logoutDB = () => {
  return function (dispatch, getState) {
    dispatch(logOut());
    localStorage.removeItem("username");
    localStorage.removeItem("nickname");
    localStorage.removeItem("jwtToken");
    window.location.assign("/");
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
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        return { message: action.data };
      }),
    [LOAD_NICKNAME]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.user);
        return { nickname: action.payload.user };
      }),
    [GET_NICKNAME]: (state, action) =>
      produce(state, (draft) => {
        return { user: action.data };
      }),
  },
  initialState
);
const actionCreators = {
  SignupDB,
  loginDB,
  logoutDB,
  getNickname,
  getUser,
};
export { actionCreators };
