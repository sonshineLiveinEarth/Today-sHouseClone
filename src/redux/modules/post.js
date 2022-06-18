import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// Action
const ADD_POST = "ADD_POST";

// Action Creator
const addPost = createAction(ADD_POST, (postObj) => ({ postObj }));

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

// 게시물 업로드
export const addPostDB = (formData) => {
  return async function (dispatch) {
    try {
      //
      // axios post
      //
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

// Reducer
export default handleActions(
  {
    [ADD_POST]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.postList.unshift(payload.postObj);
      }),
  },
  initialState
);

const actionCreators = {
  addPost,
  addPostDB,
};

export { actionCreators };
