// import express from 'express';
// const app = express()
// import path from 'path'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// app.use(express.urlencoded({extended:true}))
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'form.html'));
// })

// app.post('/submit',(req, res)=>{
//     const {username, email} = req.body;
//     console.log(req.body)
//     res.send()
//     // res.send(`
//     //     <h1>Form submitted</h1>
//     //     Name: ${username}
//     //     Email: ${email}
//     //     `)
// })
// app.listen(3000, ()=>{
//     console.log("server is running")
// })


// import express from 'express';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// app.use(express.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'form.html'));
// });
// app.post('/submit', (req, res) => {
//     // const { username, email } = req.body;
//     const { username, email } = req.body.details;
//     console.log(req.body);
//     fs.writeFile('dataput.txt', JSON.stringify(req.body), (err) => {
//         if (err) {
//             console.log("error");
//         } else {
//             console.log("data saved");
//         }
//     });
//     // res.send(`
//     //     <h1>Form submitted</h1>
//     //     Name: ${username}<br>
//     //     Email: ${email}
//     // `);
//     res.send(`
//         <h1>Form submitted</h1>
//         Name: ${username}<br>
//         Email: ${email}
//     `);
// });
// app.listen(3000, () => {
//     console.log("server is running");
// });


import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/submit', (req, res) => {
    const { username, email } = req.body;
    const newUser = { username, email };
    let content = "";

    const readStream = fs.createReadStream('newdata.json', 'utf-8');
    readStream.on('data', (chunk) => {
        content += chunk;
    });
    readStream.on('end', () => {
        let users = [];
        if (content !== "") {  // use content.trim()
            users = JSON.parse(content);
        }
        users.push(newUser);
        const writeStream = fs.createWriteStream('newdata.json');
        writeStream.write(JSON.stringify(users, null, 2));
        writeStream.end();
    });
    res.send(`
        <h1>Form Submitted</h1>
        Name: ${username}<br>
        Email: ${email}
    `);
});
app.listen(2000, () => {
    console.log("Server running on port 3000");
});

// import express from 'express';
// import fs from 'fs';
// import path from 'path';
// import zlib from 'zlib';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'form.html'));
// });

// app.post('/submit', (req, res) => {

//     const { username, email } = req.body;
//     const newUser = { username, email };

//     let content = "";

//     const readStream = fs.createReadStream('data.json', 'utf-8');

//     readStream.on('data', (chunk) => {
//         content += chunk;
//     });

//     readStream.on('end', () => {

//         let users = [];

//         if (content.trim() !== "") {
//             users = JSON.parse(content);
//         }

//         users.push(newUser);

//         const writeStream = fs.createWriteStream('data.json');

//         writeStream.write(JSON.stringify(users, null, 2));
//         writeStream.end();

//         writeStream.on('finish', () => {

//             console.log("User added successfully");

//             // ✅ Compress file using zlib
//             const source = fs.createReadStream('data.json');
//             const destination = fs.createWriteStream('data.json.gz');
//             const gzip = zlib.createGzip();

//             source.pipe(gzip).pipe(destination);

//             destination.on('finish', () => {
//                 console.log("File compressed successfully → data.json.gz");
//             });

//         });

//     });

//     res.send(`
//         <h1>Form Submitted</h1>
//         Name: ${username}<br>
//         Email: ${email}
//     `);
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
