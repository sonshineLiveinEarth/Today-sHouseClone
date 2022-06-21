import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

// Action
const GET_POST_LIST = "GET_POST_LIST";
const GET_POST = "GET_POST";
const GET_RANKING = "GET_RANKING";
const ADD_POST = "ADD_POST";
const LIKE_POST = "LIKE_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

// Action Creator
const getPostList = createAction(GET_POST_LIST, (postList) => ({ postList }));
const getPost = createAction(GET_POST, (post) => ({ post }));
const getRanking = createAction(GET_RANKING, (post) => ({ post }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const likePost = createAction(LIKE_POST, (id) => ({ id }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (id) => ({ id }));

// InitialState
const initialState = {
  postlike: false,
  postOne: {},
  postList: [{}],
  ranking: [{}],
};

// Middleware

// 전체 게시물 받아오기
export const getPostListDB = () => {
  return async function (dispatch) {
    try {
      const response = await apis.loadPostList();
      dispatch(getPostList(response.data));
      // console.log(response.data);
    } catch (error) {
      alert("게시물을 불러오는 중에 오류가 발생했습니다.");
      console.log(error);
    }
  };
};

// 한 개 게시물 받아오기
export const getPostDB = (postId) => {
  return async function (dispatch) {
    apis
      .loadPost(postId)
      .then((response) => {
        dispatch(getPost(response.data));
      })
      .catch((error) => {
        window.alert("게시물을 불러오는 중에 오류가 발생했습니다.");
        console.log(error);
      });
  };
};

// 게시물 랭킹 받아오기
export const getRankingDB = () => {
  return async function (dispatch) {
    try {
      const response = await apis.loadRanking();
      dispatch(getRanking(response.data));
    } catch (error) {
      alert("랭킹을 불러오는 중에 오류가 발생했습니다.");
      console.log(error);
    }
  };
};

// 게시물 작성, 수정
export const addPostDB = (id, formData) => {
  const post = {};
  for (let key of formData.keys()) {
    console.log("request :", { [key]: formData.get(key) });
    post[key] = formData.get(key);
  }
  return async function (dispatch) {
    try {
      if (id) {
        await apis.editPost(id, formData);
      } else {
        await apis.addPost(formData);
      }

      dispatch(getPostListDB());
    } catch (error) {
      window.alert("게시물 등록 중에 오류가 발생했습니다.");
      console.log(error);
    }
  };
};
// 좋아요
export const addHeartDB = (postId) => async (dispatch) => {
  try {
    console.log("게시글에 하트 추가할 준비", postId);
    const { data } = await apis.addHeart(postId);
    console.log(data);
    dispatch(likePost(postId));
    // navigate(0);
  } catch (error) {
    window.alert("하트 등록 중에 오류가 발생했습니다.");
    console.log(error);
  }
};

// 게시물 삭제
export const deletePostDB = (id) => {
  return async function (dispatch) {
    try {
      await apis.deletePost(id);
      dispatch(deletePost(id));
    } catch (error) {
      alert("게시물 삭제 중에 오류가 발생했습니다.");
      console.log(error);
    }
  };
};

// Reducer
export default handleActions(
  {
    [GET_POST_LIST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.postList = payload.postList;
      }),
    [GET_POST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.postOne = payload.post;
      }),
    [GET_RANKING]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.ranking = payload.post;
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

    [LIKE_POST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.postList = state.postList.map((post) => {
          console.log(post, post.id, payload.id, draft.postlike);
          if (post.id === payload.id) return !draft.postlike;
        });
      }),

    [DELETE_POST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.postList = draft.postList.filter(
          (post) => Number(post.id) !== Number(payload.id)
        );
      }),
  },
  initialState
);
