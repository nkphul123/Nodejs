import fs from 'fs';
const writeStream = fs.createWriteStream('final.txt');

writeStream.write("Hello this is line 1\n");
writeStream.write("Hello this is line 2\n");
writeStream.write("Hello this is line 3\n");

writeStream.end()

writeStream.on('finish', ()=>{
    console.log('All the data has been written to final.txt');
})

writeStream.on('error', (err)=>{
    console.error("Error in writing to file", err);
})