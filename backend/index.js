const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const USER = { email: "laddu@netflix.com", password: "Thangam@91" };

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === USER.email && password === USER.password) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
