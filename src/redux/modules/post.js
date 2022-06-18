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
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));

// Initial State
const initialState = {
  postList: [
    {
      id: "0",
      userNickname: "nickname",
      imageFile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqHtpcnZPaYKjLm_tKmjVkqVwY3dRSAL2DvsfuLlS85OfLjyN63po5z2WSbO43LSza5s&usqp=CAU",
      content: "content1",
    },
    {
      id: "1",
      userNickname: "nickname",
      imageFile:
        "https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg",
      content: "content2",
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
export const addPostDB = (formData) => {
  return async function (dispatch) {
    try {
      // await apis.addPost(formData);

      const postObj = {};
      for (let key of formData.keys()) {
        // console.log({ [key]: formData.get(key) });
        postObj[key] = formData.get(key);
      }
      postObj.imageFile =
        "https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg";
      postObj.userNickname = "nickname";
      //   console.log(postObj);
      dispatch(addPost(postObj));
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
        draft.postList.unshift(payload.postObj);
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
        draft.postList = draft.postList.filter((post) => post.id !== payload);
      }),
  },
  initialState
);

const actionCreators = {
  addPost,
  addPostDB,
};

export { actionCreators };
