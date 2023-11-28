import axios from "axios";
import { GenerateError } from "../toast/Toast";

const axiosInterceptorInstanceOwner = axios.create({
  baseURL: import.meta.env.VITE_OWNER_URL,
});

axiosInterceptorInstanceOwner.interceptors.request.use((req) => {
  if (localStorage.getItem("propertyToken")) {
    req.headers.Authorization =
      "Bearer " + localStorage.getItem("propertyToken");
  }
  return req;
});

axiosInterceptorInstanceOwner.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 400) {
      GenerateError(error.response.data.message);
    } else if (error.response && error.response.status === 404) {
      window.location = "/property/errorpage";
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstanceOwner;
