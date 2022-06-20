import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import { useNavigate } from "react-router-dom";

// Action
// const GET_COMMENT_LIST = "GET_COMMENT_LIST";
// const ADD_COMMENT = "ADD_COMMENT";
// const DELETE_COMMENT = "DELETE_COMMENT";
const GET_COMMENT_LIST = "comment/LOAD";
const ADD_COMMENT = "comment/ADD";
const DELETE_COMMENT = "comment/DELETE";

// Action Creator
// const getCommentList = createAction(GET_COMMENT_LIST, (postList) => ({
//   postList,
// }));
// const addComment = createAction(ADD_COMMENT, (post) => ({ post }));
// const deleteComment = createAction(DELETE_COMMENT, (id) => ({ id }));

//액션
export const addComment = (comment_data) => {
  return { type: ADD_COMMENT, comment_data };
};
export const getCommentList = (comment_data) => {
  return { type: GET_COMMENT_LIST, comment_data };
};
export const deleteComment = (comment_data) => {
  return { type: DELETE_COMMENT, comment_data };
};

// Initial State
const initialState = {
  list: [],
};

// //navigate
const navigate = useNavigate;

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
    // navigate(0);
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

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "comment/LOAD": {
      console.log("이제 값을 불러올거야");
      console.log(action.comment_data.data);
      return { list: action.comment_data.data, is_loaded: true };
    }
    case "comment/ADD": {
      console.log("이제 값을 만들거야");

      const new_comment_list = [...state.list];
      return { ...state, list: new_comment_list };
    }
    default:
      return state;
  }
}
