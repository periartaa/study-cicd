const express = require("express");
const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON body
app.use(express.json());

// Tambahkan handler untuk POST /login
app.post("/login", (req, res) => {
  const { username, password } = req.body; // Ambil data dari body request
  if (username === "admin" && password === "1234") {
    res.status(200).send("Login berhasil");
  } else {
    res.status(401).send("Login gagal");
  }
});

// Tambahkan handler untuk POST /logout
app.post("/logout", (req, res) => {
  res.status(200).send("Logout berhasil");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
