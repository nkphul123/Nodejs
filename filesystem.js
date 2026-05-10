/*readFile() */
// import  fs from 'fs';
// const filepath = 'test.json';
// fs.readFile(filepath, 'utf8', (err, data)=>{
//     if(err){
//         console.error('Error in reading file:', err);
//         return;
//     }
//     const data1 = JSON.parse(data)
//     console.log('File contents are:\n', data1)
// })

/*writeFile() */
// import  fs from 'fs';
// const filepath = 'output.json';
// const content ={
//     name:'nodejs',
//     code:'int222'
// };
// const content1 = JSON.stringify(content, null, 2)
// fs.writeFile(filepath, content1, 'utf8', (err)=>{
//     if(err){
//         console.error('Error in writing file:', err);
//         return;
//     }
//     console.log('File contents written');
// })

/*readFileSync() */
// import fs from 'fs';
// const data = fs.readFileSync('test.txt', 'utf8')
// console.log(data);
// console.log("Program ended");

// import  fs from 'fs';
// const filepath = 'test.json';
// fs.readFile(filepath, {encoding:'utf8', flag:'w'}, (err, data)=>{
//     if(err){
//         console.error('Error in reading file:', err);
//         return;
//     }
//     const data1 = JSON.parse(data)
//     console.log('File contents are:\n', data1)
// });
// console.log("Program ended");