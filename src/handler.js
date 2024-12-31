// src/handler.js
const login = (req, res) => {
  try {
    const { username, password } = req.body;

    // Validasi input
    if (!username || !password) {
      return res.status(400).send("Username and password are required");
    }

    // Cek kredensial (contoh sederhana)
    if (username === "admin" && password === "1234") {
      // Simpan username dalam session
      if (req.session) {
        req.session.user = username;
        return res.status(200).send("Login successful");
      }
    }

    return res.status(401).send("Invalid credentials");
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send("Internal server error");
  }
};

const logout = (req, res) => {
  try {
    // Periksa apakah ada user dalam session
    if (!req.session || !req.session.user) {
      return res.status(400).send("No active session");
    }

    // Hapus session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error during logout:", err);
        return res.status(500).send("Logout failed");
      }
      return res.status(200).send("Logout successful");
    });
  } catch (error) {
    console.error("Error during logout:", error);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { login, logout };
