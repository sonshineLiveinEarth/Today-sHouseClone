import axios from "axios";

const formApi = axios.create({
  baseURL: "http://3.39.230.66",
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

formApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("jwtToken");
  config.headers.common["Authorization"] = `Bearer ${token}`;
  return config;
});

// 이미지 Api 따로 만들기
export const apis = {
  // post"
  loadPostList: () => formApi.get("/api/posts"),
  loadpost: (id) => formApi.get(`/api/detail/${id}`),
  addPost: (post) => formApi.post("/api/post", post),
  editPost: (id, contents) => formApi.post(`api/post/${id}`, contents),
  deletePost: (id) => formApi.delete(`/api/post/${id}`),

  // comment
  loadcomments: (id) => formApi.get(`/api/detail/${id}`),
  createComment: (comment) =>
    formApi.post(`/api/detail/${comment.postId}`, { ...comment }),
  delComment: (id) => formApi.delete(`/api/comment/${id}`),
  // editComment: (id, coId, content) =>
  // 	api.put(`/api/articles/${id}/comments/${coId}`, { content }),

  // user
  login: (id, pw) =>
    formApi.post("/user/login", { username: id, password: pw }),

  signup: (username, password, userNickname) =>
    formApi.post("/user/signup", {
      username: username,
      password: password,
      userNickname: userNickname,
    }),

  logout: () => formApi.post("/"),
  // userInfo: () => api.get(`/myinfo`),
  // userPassword: (pw) => api.post(`/myinfo`, pw),
  // userNewPassword: (pw) => api.put(`/myinfo`, pw),

  userInfo: () => formApi.get(`/api/userData`),
};
