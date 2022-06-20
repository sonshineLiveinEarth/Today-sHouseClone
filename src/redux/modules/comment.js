import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

// Action
const GET_COMMENT_LIST = "GET_COMMENT_LIST";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// Action Creator
const getCommentList = createAction(GET_COMMENT_LIST, (postList) => ({
  postList,
}));
const addComment = createAction(ADD_COMMENT, (post) => ({ post }));
const deleteComment = createAction(DELETE_COMMENT, (id) => ({ id }));

// Initial State
const initialState = {
  list: [
    {
      id: "1",
      userNickname: "nickname",
      comment: "멋지네요!",
    },
    {
      id: "1",
      userNickname: "nickname",
      comment: "우와🤍",
    },
  ],
};

// Middleware

// 전체 게시물 받아오기
export const getCommentListDB = (postId) => {
  return async function (dispatch) {
    apis
      .loadCommentList(postId)
      .then((response) => {
        console.log("전체 코멘트를 받았어!", response);
        dispatch(getCommentList(response));
      })
      .catch((error) => {
        window.alert("댓글을 불러오는 중에 오류가 발생했습니다.");
        console.log(error);
      });
  };
};

// 게시물 업로드
export const addCommentDB = (comment) => async (dispatch) => {
  try {
    console.log("댓글 만들 준비", comment);
    const { data } = await apis.createComment(comment);
    console.log(data);
    dispatch(addComment(data));
  } catch (error) {
    window.alert("댓글 등록 중에 오류가 발생했습니다.");
    console.log(error);
  }
};

// 게시물 삭제
export const deleteCommentDB = (id) => {
  console.log(id);
  return async function (dispatch) {
    try {
      console.log("댓글을 삭제할거야!");
      await apis.deleteComment(id);
      dispatch(deleteComment(id));
    } catch (error) {
      alert("댓글 삭제 중에 오류가 발생했습니다.");
      console.log(error);
    }
  };
};

// Reducer
export default handleActions(
  {
    [GET_COMMENT_LIST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.list = payload;
      }),
    // [ADD_COMMENT]: (state, { payload }) =>
    //   produce(state, (draft) => {
    //     console.log(state.list.postList.data);
    //     console.log(draft);
    //     draft.list.unshift(state.list.postList.data);
    //   }),

    [ADD_COMMENT]: (state, action) => {
      console.log(action);
      console.log(state.list.postList.data);
      return {
        ...state,
        comments: state.list.postList.data,
      };
    },

    [DELETE_COMMENT]: (state, action) => {
      console.log(state);
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload.coId
        ),
      };
    },

    // [DELETE_COMMENT]: (state, { payload }) =>
    //   produce(state, (draft) => {
    //     draft.list = draft.list.filter((post) => post.id !== payload.id);
    //   }),
  },
  initialState
);

const actionCreators = {
  addComment,
  addCommentDB,
};

export { actionCreators };
