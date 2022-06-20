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
  loadPost: (id) => api.get(`/api/post/${id}`),

  addPost: (post) => formApi.post("/api/post", post),
  editPost: (id, post) => formApi.post(`api/post/${id}`, post),
  deletePost: (id) => api.delete(`/api/post/${id}`),

  // comment
  loadcomments: (id) => api.get(`/api/detail/${id}`),
  createComment: (comment) =>
    api.post(`/api/detail/${comment.postId}`, { ...comment }),
  delComment: (id) => api.delete(`/api/comment/${id}`),
  // editComment: (id, coId, content) =>
  // 	api.put(`/api/articles/${id}/comments/${coId}`, { content }),

  // user
  login: (id, pw) => api.post("/user/login", { username: id, password: pw }),

  signup: (username, password, userNickname) =>
    api.post("/user/signup", {
      username: username,
      password: password,
      userNickname: userNickname,
    }),

  logout: () => api.post("/"),
  // userInfo: () => api.get(`/myinfo`),
  // userPassword: (pw) => api.post(`/myinfo`, pw),
  // userNewPassword: (pw) => api.put(`/myinfo`, pw),

  userInfo: () => api.get(`/api/userData`),
};
