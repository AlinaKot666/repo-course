const { describe, test, expect } = require("@jest/globals");const axios = require("../axiosClient");

describe("Lesson 14 Axios Tests", () => {

test("GET posts", async () => {
    const response = await axios.get("/posts");

    expect(response.status).toBe(200);
});

test("GET post by id", async () => {
    const response = await axios.get("/posts/1");

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
});

test("GET comments", async () => {
    const response = await axios.get("/comments");

    expect(response.status).toBe(200);
});

test("POST create post", async () => {
    const response = await axios.post("/posts", {
        title: "Lesson 14",
        body: "Axios test",
        userId: 1
    });

    expect(response.status).toBe(201);
});

test("POST create comment", async () => {
    const response = await axios.post("/comments", {
        name: "QA",
        email: "qa@test.com",
        body: "test"
    });

    expect(response.status).toBe(201);
});

});