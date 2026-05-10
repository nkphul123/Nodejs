// import http from 'http';
// import fs from 'fs';

// const server = http.createServer((req, res) => {

//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`
//           <h2>Read File Using Node.js</h2>
//           <a href="/read">
//             <button>Read File</button>
//           </a>
//     `);
//   }

//   else if (req.url === "/read") {
//     fs.readFile("test.txt", "utf8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Error reading file");
//         return;
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(`
//             <h3>File Content:</h3>
//             <p>${data}</p>
//             <a href="/">Back</a>
//       `);
//     });
//   }

//   else {
//     res.writeHead(404);
//     res.end("Page not found");
//   }

// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });


// import http from 'http';
// import fs from 'fs';
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`
//       <h2>Read File Using Node.js</h2>
//       <a href="/read">
//         <button>Read File</button>
//       </a>
//     `);
//   }

//   else if (req.url === "/read") {
//     fs.readFile("data.json", "utf8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Error reading file");
//         return;
//       }
//       const products = JSON.parse(data);   // Convert JSON string → array
//       let rows = "";
//       for (let i = 0; i < products.length; i++) {
//         rows += `
//           <tr>
//             <td>${products[i].id}</td>
//             <td>${products[i].name}</td>
//             <td>₹${products[i].price}</td>
//           </tr>
//         `;
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(`
//         <table border="1">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//           ${rows}
//         </table>
//         <a href="/">Back</a>
//       `);
//     });
//   }
//   else {
//     res.writeHead(404);
//     res.end("Page not found");
//   }
// });
// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });


import http from 'http';
import fs from 'fs';
import { EventEmitter } from 'events';
const server = http.createServer((req, res) => {
  const fileEvent = new EventEmitter();
  fileEvent.on('fileRead', (products) => {
    let rows = "";
    for (let i = 0; i < products.length; i++) {
      rows += `
        <tr>
          <td>${products[i].id}</td>
          <td>${products[i].name}</td>
          <td>₹${products[i].price}</td>
        </tr>
      `;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h2>Products List</h2>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        ${rows}
      </table>
      <br>
      <a href="/">Back</a>
    `);
  });

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h2>Read File Using Node.js</h2>
      <a href="/read">
        <button>Read File</button>
      </a>
    `);
  }

  else if (req.url === "/read") {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading file");
        return;
      }
      const products = JSON.parse(data);
      fileEvent.emit('fileRead', products);
    });
  }
  else {
    res.writeHead(404);
    res.end("Page not found");
  }
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
