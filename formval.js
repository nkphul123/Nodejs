// import express from 'express';
// const app = express()
// import path from 'path'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import {body, validationResult} from 'express-validator'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// app.use(express.urlencoded({extended:true}))
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'formval.html'));
// })

// app.post('/submit', [
//     body('name').notEmpty().withMessage(),
//     body('email').isEmail().withMessage()
// ], (req,res)=>{
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.send("Please fill all the fields correctly <a href ='/'>Go back</a>")
//     }
//     res.send(`<h2>Success</h2><p>Name: ${req.body.name} Email: ${req.body.email}</p>`)
// })

// app.listen(3000, ()=>{
//     console.log("Server is running")
// })

import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { body, validationResult } from 'express-validator';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'formval.html'));
});

app.post(
  '/submit',
  [
    body('name').notEmpty().withMessage('Name field cannot be empty!'),
    body('email').isEmail().withMessage('Please enter a valid email address!'),
    body('password').isLength({min:4, max: 8}).withMessage("Min 4 chars and max 8 chars are needed")
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(err => `<li>${err.msg}</li>`).join('');
        return res.send(`
        <h3>Form submission failed!</h3>
        <ul>${errorMessages}</ul>
        <a href="/">Go Back</a>
      `);
    }
    res.send(`<h2>Success</h2><p>Name: ${req.body.name} <br>Email: ${req.body.email}</p>`);
  }
);
app.listen(3000, () => {
  console.log('Server is running');
});
