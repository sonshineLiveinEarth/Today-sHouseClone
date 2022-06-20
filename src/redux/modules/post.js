import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";
// Action
const GET_POST_LIST = "GET_POST_LIST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

// Action Creator
const getPostList = createAction(GET_POST_LIST, (postList) => ({ postList }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (id) => ({ id }));

// Initial State
const initialState = {
  postList: [
    {
      id: "0",
      userNickname: "nickname",
      imageFile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqHtpcnZPaYKjLm_tKmjVkqVwY3dRSAL2DvsfuLlS85OfLjyN63po5z2WSbO43LSza5s&usqp=CAU",
      content: "content1",
      heartCnt: 0,
      bookmarkCnt: 0,
      commentCnt: 0,
      comment: "",
    },
    {
      id: "1",
      userNickname: "nickname",
      imageFile:
        "https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg",
      content:
        "비오려고 하루종일 후덥지근 해요. 몸이 찌뿌둥하고 깔아져서 하루종일 침대밖을 못벗어났어요😔 계속 이러고 있어선 안되겠어서 잘 밤에 부지런을 떨어봤는데요. 간만에 구조도 바꾸고 이불도 교체했답니다 :) 하루종일 후덥지근 눅눅했는데 산뜻하고 쾌적해서 모모도 좋아하네요🐱💙 구조바꾸는게 힘들긴 하지만 하고나면 뿌듯하더라고요. 오늘은 분리형 구조로🤍",
      heartCnt: 11,
      bookmarkCnt: 22,
      commentCnt: 33,
      comment:
        "비오려고 하루종일 후덥지근 해요. 몸이 찌뿌둥하고 깔아져서 하루종일 침대밖을 못벗어났어요😔 계속 이러고 있어선 안되겠어서 잘 밤에 부지런을 ",
    },
  ],
};

// Middleware

// 전체 게시물 받아오기
export const getPostListDB = () => {
  return async function (dispatch) {
    apis
      .loadPostList()
      .then((response) => {
        dispatch(getPostList(response));
      })
      .catch((error) => {
        window.alert("게시물을 불러오는 중에 오류가 발생했습니다.");
        console.log(error);
      });
  };
};

// 게시물 업로드
export const addPostDB = (id, formData) => {
  return async function (dispatch) {
    try {
      if (id) {
        // await apis.editPost(id,formData)
      } else {
        // await apis.addPost(formData);
      }

      const post = {};
      for (let key of formData.keys()) {
        // console.log("request :", { [key]: formData.get(key) });
        post[key] = formData.get(key);
      }
      post.imageFile = "/images/Logo.png";
      post.userNickname = "nickname";
      // console.log(post);
      // dispatch(addPost(post));
    } catch (error) {
      window.alert("게시물 등록 중에 오류가 발생했습니다.");
      console.log(error);
    }
  };
};

// 게시물 삭제
export const deletePostDB = (id) => {
  return async function (dispatch) {
    try {
      // await apis.deletePost(id);

      dispatch(deletePost(id));
    } catch (error) {
      alert("댓글 삭제 중에 오류가 발생했습니다.");
      console.log(error);
    }
  };
};

// Reducer
export default handleActions(
  {
    [GET_POST_LIST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.postList = payload;
      }),
    [ADD_POST]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(payload);
        draft.postList.unshift(payload.post);
      }),
    [EDIT_POST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.postList = state.postList.map((post) => {
          // console.log(post.id, payload.id, payload);
          if (post.id === payload.id) {
            return {
              ...post,
              imageFile: payload.imageFile,
              content: payload.content,
            };
          } else {
            return post;
          }
        });
      }),
    [DELETE_POST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.postList = draft.postList.filter(
          (post) => post.id !== payload.id
        );
      }),
  },
  initialState
);

const actionCreators = {
  addPost,
  addPostDB,
};

export { actionCreators };
