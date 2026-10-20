import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"http://localhost:5000/",
    timeout:10000,
    // headers:{
    //     "Content-Type": "application/json",
    //     "authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWNiNDkxZmMxZWU5NTNkOTI2NWI1ZjAiLCJyb2xlIjoibWFuYWdlciIsImlhdCI6MTc5MjA1ODg3OCwiZXhwIjoxNzkyMDU5Nzc4fQ.5Y2PLkYSg4p0l3tiYNMe7jYyUR64XxmFHLxTx-jddHA"
    // }
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
