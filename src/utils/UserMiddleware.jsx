import axios from "axios";
import { GenerateError } from "../toast/Toast";

const axiosInterceptorInstance = axios.create({
  baseURL: import.meta.env.VITE_USER_URL,
});

axiosInterceptorInstance.interceptors.request.use((req) => {
  if (localStorage.getItem("userToken")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("userToken");
  }
  return req;
});

axiosInterceptorInstance.interceptors.response.use(
  (response) => response,
  (error) => {
   
    if (error.response && error.response.status === 400) {
      console.log(error.response.data.message);
      GenerateError(error.response.data.message);
    } else if (error.response && error.response.status === 403) {
      localStorage.removeItem("userToken");
      setTimeout(() =>{
        GenerateError(error.response.data.message);
      },200)
      window.location = "/home";
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
