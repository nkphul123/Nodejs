import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SECRET_KEY = "mysecretkey";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "jwtapp.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    // NEW TOKEN EACH LOGIN
    const token = jwt.sign({ username },SECRET_KEY,{ expiresIn: "1m" });
    // send token to browser
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});


app.get("/dashboard", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("Please login first");
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err) => {
    if (err) {
      return res.status(401).send("Invalid or expired token");
    }
    res.send("Welcome to Dashboard");
    console.log(token)
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
