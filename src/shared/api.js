import axios from "axios";

// let api;
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://43.200.178.141:8080";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const userAPI = {
  emailCheck: (email) => api.post("/api/member/email", email),

  nicknameCheck: (nickname) => api.post("/api/member/nickname", nickname),

  register: (email, nickname, password) =>
    api.post("/api/member/register", { email, nickname, password }),

  login: (email, password) =>
    api.post("/api/member/login", { email, password }),
};

// Todo
export const bookAPI = {
  searchBooks: (title) =>
    axios.get(
      `https://dapi.kakao.com/v3/search/book?target=title&query=${title}&size=20`,
      { headers: { Authorization: process.env.REACT_APP_KaKaoKEY } }
    ),
};

export const reviewAPI = {
  getAllReviews: () => api.get(""),
};

export default api;
