// import http from 'http';
// import fs from 'fs';
// const server = http.createServer((req, res) => {
//   const writable = fs.createWriteStream('sample.txt');
//   writable.write('wow wow!\n');
//   writable.end(() => {
//     const readable = fs.createReadStream('sample.txt');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('File content:\n');
//     readable.on('data', (chunk) => {
//       res.write(chunk);
//     });
//     readable.on('end', () => {
//       res.end('\nDone');
//     });
//   });
// });
// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });


import http from 'http';
import fs from 'fs';
const server = http.createServer((req, res) => {
    if (req.url === '/write') {
        const writable = fs.createWriteStream('sample.txt');
        writable.write('Hello World!\n');
        writable.end(() => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Data written to file successfully');
        });
    }
    else if (req.url === '/read') {
        const readable = fs.createReadStream('sample.txt');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        readable.on('data', (chunk) => {
            res.write(chunk);
        });
        readable.on('end', () => {
            res.end();
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
