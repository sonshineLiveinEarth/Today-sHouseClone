import axios from "axios";

const api = axios.create({
  baseURL: "http://3.39.230.66",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

<<<<<<< HEAD
// api.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("jwtToken");
//   config.headers.common["Authorization"] = `Bearer ${token}`;
//   return config;
// });
=======
const formApi = axios.create({
  baseURL: "http://3.39.230.66",
  headers: {
    "content-type": "multipart/form-data",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("jwtToken");
  config.headers.common["Authorization"] = `Bearer ${token}`;
  return config;
});
>>>>>>> f11a91faf5f410efe51c06a2af9da163df9083d3

// api.interceptors.request.use(function (config) {
// 	const accessToken = document.cookie.split('=')[1];
// 	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
// 	return config;
// });

// 이미지 Api E따로 만들어서
// "content-type": "multipart/form-data"

export const apis = {
  // post"
  loadPostList: () => api.get("/api/posts"),
  loadpost: (id) => api.get(`/api/detail/${id}`),

  addPost: (post) => formApi.post("/api/post", post),
  editPost: (id, contents) => formApi.post(`api/post/${id}`, contents),
  deletePost: (id) => api.delete(`/api/post/${id}`),

  // comment
  loadcomments: (id) => api.get(`/api/detail/${id}`),
  createComment: (comment) =>
    api.post(`/api/detail/${comment.postId}`, { ...comment }),
  delComment: (id) => api.delete(`/api/comment/${id}`),
  // editComment: (id, coId, content) =>
  // 	api.put(`/api/articles/${id}/comments/${coId}`, { content }),

  // user
  login: (id, pw) =>
    api.post("/api/login", { userEmail: id, userPassword: pw }),
  // login: (userEmail, userPassword) =>
  //   api.post("/api/login", {
  //     userEmail: userEmail,
  //     passPassword: userPassword,
  //   }
  //   ),
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
