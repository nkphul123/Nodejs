import express from 'express';
import { auth } from './authmiddle.js';
// import auth from './authmiddle.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
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
