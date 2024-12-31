const login = (req, res) => {
  try {
    const { username } = req.body;

    // Validasi input
    if (!username || typeof username !== "string") {
      return res.status(400).send("Invalid username");
    }

    // Simpan username dalam session
    if (req.session) {
      req.session.user = username;
      return res.status(200).send("Login successful");
    } else {
      return res.status(500).send("Session is not available");
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send("Internal server error");
  }
};

const logout = (req, res) => {
  try {
    // Periksa apakah session tersedia
    if (!req.session) {
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
