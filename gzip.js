// const zlib = require('zlib');
// const data = "This is a node.js class";
// zlib.gzip(data, (err, buffer)=>{
// if(err) return console.log(err);
// console.log(buffer.toString('base64'))

// zlib.gunzip(buffer,(err,buffer)=>{
//     console.log(buffer.toString('utf-8'))
// })
// })

import {gzip, gunzip} from 'zlib';
const data = "This is a node.js class";
gzip(data, (err, buffer)=>{
if(err) return console.log(err);
console.log(buffer.toString('base64'))

gunzip(buffer,(err,buffer)=>{
    console.log(buffer.toString('utf-8'))
})
})