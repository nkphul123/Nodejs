import http from "http";
import fs from "fs";
import crypto from "crypto";

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    fs.readFile("async.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // REAL async file I/O
  else if (req.url === "/file") {
    fs.readFile("async.html", () => {
      res.end("File read completed (async I/O)");
    });
  }

  // REAL async CPU task (libuv thread pool)
  else if (req.url === "/crypto") {
    crypto.pbkdf2("password", "salt", 200000, 64, "sha512", () => {
      res.end("Password hash completed (async CPU task)");
    });
  }

  // Immediate response
  else if (req.url === "/time") {
    res.end("Server time: " + new Date().toLocaleTimeString());
  }

});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
