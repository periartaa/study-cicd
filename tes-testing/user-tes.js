const chai = require("chai");
const chaiHttp = require("chai-http");
const express = require("express");
const session = require("express-session");
const routes = require("../src/routes");

const app = express();
app.use(express.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use("/", routes);

chai.use(chaiHttp);
const { expect } = chai;

describe("User Authentication", () => {
  it("should login successfully", (done) => {
    chai
      .request(app)
      .post("/login")
      .send({ username: "testuser" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Login successful");
        done();
      });
  });

  it("should fail to login without username", (done) => {
    chai
      .request(app)
      .post("/login")
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.text).to.equal("Username is required");
        done();
      });
  });

  it("should logout successfully", (done) => {
    chai
      .request(app)
      .post("/logout")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Logout successful");
        done();
      });
  });
});
