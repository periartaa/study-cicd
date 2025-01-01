const request = require("supertest");
const express = require("express");
const session = require("express-session");
const routes = require("../src/routes");

const app = express();

// Setup
app.use(express.json());
app.use(
  session({
    secret: "test-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(routes);

describe("User Authentication API Tests", () => {
  test("POST /login - Successful login", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "admin", password: "1234" });
    expect(response.status).toBe(200);
    expect(response.text).toBe("Login successful");
  });

  test("POST /login - Failed login due to invalid credentials", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "wrong", password: "wrong" });
    expect(response.status).toBe(401);
  });

  test("POST /logout - Successful logout", async () => {
    // Login first
    const agent = request.agent(app);
    await agent.post("/login").send({ username: "admin", password: "1234" });

    // Then logout
    const response = await agent.post("/logout");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Logout successful");
  });

  test("POST /logout - Failed logout due to no active session", async () => {
    const response = await request(app).post("/logout");
    expect(response.status).toBe(400);
    expect(response.text).toBe("No active session");
  });
});
