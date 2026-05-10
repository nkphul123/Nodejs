// import fs from 'fs';
// const readStream = fs.createReadStream('test.txt', {encoding:'utf-8', start:0, end:3});
// readStream.on('data', (chunk)=>{
// console.log("Recevied chunk:\n", chunk);
// })
// readStream.on('end', ()=>{
//     console.log("Finished reading the file")
// });
// readStream.on('error', (err)=>{
//     console.error("Error in reading the file", err);
// })

import fs from 'fs';
let content = '';
let charCount = 0;
const readStream = fs.createReadStream('test.txt',{ encoding: 'utf-8', start: 0, end: 3 });
readStream.on('data', (chunk) => {
    console.log("Received chunk:\n", chunk);
    content += chunk;
    charCount += chunk.length;
});
readStream.on('end', () => {
    console.log("Finished reading the file");
    console.log("Final content:", content);
    console.log("Total characters read:", charCount);
});
readStream.on('error', (err) => {
    console.error("Error in reading the file", err);
});
