import axios from "axios";
import { GenerateError } from "../toast/Toast";

const axiosInterceptorInstanceOwner = axios.create({
  baseURL: import.meta.env.VITE_OWNER_URL,
});

axiosInterceptorInstanceOwner.interceptors.request.use((req) => {
    console.log(localStorage.getItem("propertyToken"),'iiiiiiiiii');
  if (localStorage.getItem("propertyToken")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("propertyToken");
  }
  console.log(req)
  return req;
});


axiosInterceptorInstanceOwner.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 400) {
      GenerateError(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstanceOwner;
