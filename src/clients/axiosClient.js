const axios = require("axios");

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json"
  }
});

axiosClient.interceptors.request.use(
  request => {
    console.log("Request:", request.method, request.url);
    return request;
  }
);

axiosClient.interceptors.response.use(
  response => {
    console.log("Response:", response.status);
    return response;
  }
);

module.exports = axiosClient;