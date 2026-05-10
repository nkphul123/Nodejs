import fs from 'fs';
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
writeStream.on('pipe', () => {
  console.log('Piping');
});
readStream.pipe(writeStream);
writeStream.on('finish', () => {
  console.log('File copied successfully!');
});
