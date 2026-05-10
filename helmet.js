import express from "express";
import helmet from "helmet";
const app = express();

//Apply security headers
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Secure App");
});

app.listen(3000);