import express from "express";
const app = express();
import jwt from "jsonwebtoken";
app.use(express.json());
const SECRET = "key123";

// 🔹 Login → Generate Token
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ user: username }, SECRET, { expiresIn: "1m" });
    return res.send(token);
  }
  res.send("Invalid credentials");
});

// 🔹 Protected Route → Verify Token
app.get("/home", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.send("No token provided");
  }

  // Remove "Bearer"
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.send("Invalid Token");
    }
    res.send("Welcome Home");
  });
});

app.listen(3000)