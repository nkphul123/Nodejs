// import express from 'express';
// import cookieParser from 'cookie-parser';
// const app = express();
// app.use(cookieParser());
// app.get('/', (req, res) => {
//     res.cookie('course', 'node js', { maxAge: 60000 });  // expires in 1 minute=60000 millisecs
//     res.cookie('user', 'John', { maxAge: 60000 });
//     res.send("The cookies have been set with expiry time");
//     console.log('Cookies:', req.cookies);
// });

// app.get('/clear', (req, res) => {
//     res.clearCookie('course');
//     res.clearCookie('user');
//     res.send('Cookies cleared');
// });

// app.listen(3000);

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // to handle form data

app.get('/', (req, res) => {
  res.send(`
    <h2>Set Cookies Example</h2>
    <form action="/set" method="POST">
    Course:<input type="text" name="course"><br><br>
    User:<input type="text" name="user"><br><br>
      <button type="submit">Set Cookies</button>
    </form>
    <br>
    <a href="/clear">Clear Cookies</a>
  `);
});

app.post('/set', (req, res) => {
  const { course, user } = req.body;
  res.cookie('course', course, { maxAge: 15000 }); 
  res.cookie('user', user, { maxAge: 15000 });

  res.send(`
    <h3>Cookies have been set for 1 minute!</h3>
    <h5>Course:</b> ${course}</h5>
    <h5>User:</b> ${user}</h5>
    <a href="/">Go Back</a>
  `);
});

app.get('/clear', (req, res) => {
  res.clearCookie('course');
  res.clearCookie('user');
  res.send(`
    <h3>Cookies cleared!</h3>
    <a href="/">Go Back</a>
  `);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
