import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

  // Serve HTML
  if (req.url === "/") {
    fs.readFile("async1.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // REAL async file read (slower)
  else if (req.url === "/read-file") {
    fs.readFile("test.txt", "utf8", (err, data) => {
      res.end(data);
    });
  }

  // Fast task (returns immediately)
  else if (req.url === "/fast-task") {
    res.end("execution completed");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
