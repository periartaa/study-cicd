import chai from "chai";
import chaiHttp from "chai-http";
import express from "express";
import session from "express-session";
import routes from "../src/routes.js"; // Pastikan Anda menambahkan `.js` jika menggunakan ESM

const { expect } = chai;
chai.use(chaiHttp);

const app = express();
app.use(express.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use("/", routes);

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
