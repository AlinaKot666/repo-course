const axios = require("../clients/axiosClient");

const getPosts = () => {
  return axios.get("/posts");
};

const getPostById = () => {
  return axios.get("/posts/1");
};

const getComments = () => {
  return axios.get("/comments");
};

const createPost = () => {
  return axios.post("/posts", {
    title: "Lesson 14",
    body: "Axios test",
    userId: 1
  });
};

module.exports = {
  getPosts,
  getPostById,
  getComments,
  createPost
};