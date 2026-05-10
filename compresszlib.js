// const fs = require('fs');
// const zlib = require('zlib');
import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';
const readStream = createReadStream('input.txt');
const writeStream = createWriteStream('input.txt.gz');
const gzip = createGzip()
readStream.pipe(gzip).pipe(writeStream)