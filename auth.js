// Practical Task Question:
// Q. Implement a custom middleware called authentication in Express.js that checks whether the user is an admin or not. If the URL contains ?admin=true, allow access to the /user route and print "Hello world" in the console and send "Hello World!" as a response. Otherwise, respond with "No authentication". Use the middleware only for the /user route.

// import express from 'express'
// const app = express()
// var authentication = function (req, res, next) {
// if(req.query.admin =='true'){
// let admin=true
// next();
// }
// else{
// res.send('No authentication');
// }
// }
// app.get('/user', authentication, function (req, res) {
// console.log('Hello world')
// res.send('Hello World!')
// })
// app.listen(3000)


// Create an Express application that displays a simple HTML form asking for a username and password.
// When the user submits the form:
// 1. Middleware should check if both username and password are "admin".
// 2. If correct → display "Welcome Admin!"
// 3. If not → display "Invalid credentials!"

import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
function auth(req, res, next) {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') 
    {
        next();
    } 
    else 
    {
        res.send('Invalid credentials!');
    }
}
app.get('/', (req, res) => {
    res.send(`
      <form method="post" action="/login">
        Username:<input type="text" name="username"><br><br>
        Password:<input type="password" name="password"><br><br>
        <button type="submit">Login</button>
      </form>
    `);
});
app.post('/login', auth, (req, res) => {
    res.send('Welcome Admin!');
});
app.listen(3000);
