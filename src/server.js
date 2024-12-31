// src/server.js
const express = require("express");
const session = require("express-session");
const routes = require("./routes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
app.use(routes);

// Server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app; // Export untuk testing
