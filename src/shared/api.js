import axios from "axios";

const token = localStorage.getItem("jwtToken");

const api = axios.create({
  baseURL: "http://3.39.230.66",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// form data용
const formApi = axios.create({
  baseURL: "http://3.39.230.66",
  headers: {
    "content-type": "multipart/form-data",
  },
});

api.interceptors.request.use(function (config) {
  config.headers.common["Authorization"] = `Bearer ${token}`;
  return config;
});

formApi.interceptors.request.use(function (config) {
  config.headers.common["Authorization"] = `Bearer ${token}`;
  return config;
});

export const apis = {
  // post
  loadPostList: () => api.get("/api/posts"),
  loadPost: (postId) => api.get(`/api/post/${postId}`),
  loadRanking: () => api.get("/api/post/ranking"),

  addPost: (post) => formApi.post("/api/post", post),
  editPost: (id, post) => formApi.put(`api/post/${id}`, post),
  deletePost: (id) => api.delete(`/api/post/${id}`),

  // 좋아요
  addHeart: (postId) => api.post(`/api/heart/${postId}`),

  // comment
  loadCommentList: (postId) => api.get(`/api/comment/${postId}`),
  createComment: (comment) =>
    api.post(`/api/comment/${comment.postId}`, { comment: comment.comment }),
  deleteComment: (id) => api.delete(`/api/comment/${id}`),

  // user
  login: (id, pw) => api.post("/user/login", { username: id, password: pw }),
  nicknameCheck: (userNickname) =>
    api.get(`/api/user/nicknameCheck/${userNickname}`, { userNickname }),

  signup: (username, password, userNickname) =>
    api.post("/user/signup", {
      username: username,
      password: password,
      userNickname: userNickname,
    }),

  logout: () => api.post("/"),

  userInfo: () => api.get(`/api/userData`),
};
