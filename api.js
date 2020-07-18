import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5000/api/v2`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// api.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     console.log(error);
//     if (error.response && error.response.data) {
//       // handle your errors here.

//       store.commit("ERROR", error);
//       return Promise.reject(error);
//     }
//   }
// );
export default api;
