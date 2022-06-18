import axios from "axios";

const api = axios.create({
  baseURL: "http://3.39.230.66",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// api.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("jwtToken");
//   config.headers.common["Authorization"] = `Bearer ${token}`;
//   return config;
// });

// api.interceptors.request.use(function (config) {
// 	const accessToken = document.cookie.split('=')[1];
// 	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
// 	return config;
// });

// 이미지 Api E따로 만들어서
// "content-type": "multipart/form-data"

export const apis = {
  // post"
  loadposts: () => api.get("/api/postList"),
  loadpost: (id) => api.get(`/api/detail/${id}`),

  addpost: (post) => api.post("/api/write", post),
  // edit: (id, contents) => api.put(`api/articles/${id}`, contents),

  delpost: (id) => api.delete(`/api/post/${id}`),

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
