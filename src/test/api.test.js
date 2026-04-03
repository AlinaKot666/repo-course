const { describe, test, expect } = require("@jest/globals");
const { getPosts, getPostById, getComments, createPost } = require("../controllers/user.controller");

describe("Lesson 14 Axios Tests", () => {

test("GET posts", async () => {
    const response = await getPosts();

    expect(response.status).toBe(200);
});

test("GET post by id", async () => {
    const response = await getPostById();

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
});

test("GET comments", async () => {
    const response = await getComments();

    expect(response.status).toBe(200);
});

test("POST create post", async () => {
    const response = await createPost();

    expect(response.status).toBe(201);
});

});