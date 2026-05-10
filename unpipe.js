import fs from 'fs';
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
// writeStream.on('unpipe', () => {
//   console.log('Unpiping');
// });
readStream.unpipe(writeStream);
