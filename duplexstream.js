import fs from 'fs';
const writable = fs.createWriteStream('sample.txt');
writable.write('Hello World!\n');
writable.end(() => {
  const readable = fs.createReadStream('sample.txt');
  readable.on('data', (chunk) => {
    console.log('Read from file:', chunk.toString());
  });
});
