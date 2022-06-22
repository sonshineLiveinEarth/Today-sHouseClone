import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import post from "./post";
// Action
const GET_COMMENT_LIST = "comment/LOAD";
const ADD_COMMENT = "comment/ADD";
const LIKE_COMMENT = "comment/UPDATE";
const DELETE_COMMENT = "comment/DELETE";

// Action Creator
const getCommentList = createAction(GET_COMMENT_LIST, (commentList) => ({
  commentList,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const likeComment = createAction(LIKE_COMMENT, (id, like) => ({ id, like }));
const deleteComment = createAction(DELETE_COMMENT, (id) => ({ id }));

// Initial State
const initialState = {
  commentLike: false,
  commentList: [],
};

// Middleware
// 전체 게시물 받아오기
export const getCommentListDB = (postId) => {
  return async function (dispatch) {
    apis
      .loadCommentList(postId)
      .then((response) => {
        console.log("전체 코멘트를 받았어!", response.data);
        dispatch(getCommentList(response.data));
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
    // window.location.assign(`/detail/${comment.postId}`);
  } catch (error) {
    window.alert("댓글 등록 중에 오류가 발생했습니다.");
    console.log(error);
  }
};

export const modifiCommentDB = (postId) => async (dispatch) => {
  try {
    console.log("댓글에 좋아요 추가할 준비", postId);
    const { data } = await apis.addHeartComment(postId);
    console.log(data);
    dispatch(likeComment(postId, data));
    // navigate(0);
  } catch (error) {
    window.alert("좋아요 등록 중에 오류가 발생했습니다.");
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
        console.log(payload.commentList);
        draft.commentList = payload.commentList;
      }),

    [ADD_COMMENT]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(draft);
        console.log(state);
        draft.commentList.unshift(payload.comment);
      }),

    // [LIKE_COMMENT]: (state, { payload }) =>
    //   produce(state, (draft) => {
    //     console.log(payload.like);
    //     console.log(state.commentList.content);
    //     const new_comment_list = draft.commentList.conetent.map((l, idx) => {
    //       if (payload.id === idx && payload.like) {
    //         return l.commentHeartCheck;
    //       } else if (payload.id === idx && !payload.like) {
    //         return !l.commentHeartCheck;
    //       } else {
    //         return l;
    //       }
    //     });
    //     console.log({ commentList: new_comment_list });
    //     return { ...state, commentList: new_comment_list };
    //     // draft.commentList[payload.id] = payload.like;
    //   }),

    [LIKE_COMMENT]: (state, { payload }) =>
      produce(state, (draft) => {
        console.log(payload.like);
        console.log(state.commentList);
        draft.commentList = draft.commentList.map((comment) => {
          if (Number(comment.id) === Number(payload.id)) {
            if (payload.like) {
              return {
                ...comment,
                commentHeartCheck: true,
              };
            } else if (!payload.like) {
              return {
                ...comment,
                commentHeartCheck: false,
              };
            }
          } else {
            return comment;
          }
        });
      }),

    [DELETE_COMMENT]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.commentList = draft.commentList.filter(
          (post) => post.id !== payload.id
        );
        console.log(draft.commentList);
      }),
  },
  initialState
);
