import axios from 'axios';
let axiosInstance = axios.create({
  
  // baseURL: 'https://noleftoversever-backend.herokuapp.com/',
  // baseURL:'http://ec2-52-0-121-153.compute-1.amazonaws.com:5000/',
  baseURL: 'https://ready-hand-banckend.herokuapp.com/',
  // baseURL: 'http://ec2-3-221-106-240.compute-1.amazonaws.com:5000/',
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});
// axiosInstance.defaults.headers.common["x-auth-token"] = localStorage.getItem(
//   "jwt_token"
// )
//   ? localStorage.getItem("jwt_token").toString()
//   : "";

// axiosInstance.defaults.headers.common["companyId"] = localStorage.getItem(
//   "companyId"
// )
//   ? localStorage.getItem("companyId").toString()
//   : "";

// axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
// axiosInstance.interceptors.response.use(
//   response => successHandler(response),
//   error => errorHandler(error)
// );
// const errorHandler = error => {
//   return Promise.reject({ ...error });
// };

// const successHandler = response => {
//   return response;
// };
export default axiosInstance;
