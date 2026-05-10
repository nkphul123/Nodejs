import express from 'express';
const app = express();
import userurls from './userroute.js';
app.use('/user', userurls);
app.listen(3000, ()=>{
    console.log("Server is running")
})

// import express from 'express';
// const app = express();
// import {router} from './userroute.js';
// app.use('/user', router);
// app.listen(3000, ()=>{
//     console.log("Server is running")
// })