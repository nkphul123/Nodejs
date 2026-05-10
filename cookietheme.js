// Q. Create an Express.js application that allows users to switch between Light and Dark themes. The theme preference should be stored using cookies, and the background color of the page should reflect the selected theme.

import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use(express.static('public'));

app.get('/set-theme/:mode', (req, res)=>{
    const theme = req.params.mode == 'dark' ? 'dark' : 'light';
    res.cookie('theme', theme);
    res.redirect('/')
})

app.get('/', (req, res)=>{
    const theme = req.cookies.theme || 'light'
   res.send
   (`<html>
      <head>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body class="${theme}">
        <h1>Welcome to Themed Page</h1>
        <h4>Theme set is ${theme}</h4>
        <a href="/set-theme/light">Set Light Theme</a>
        <a href="/set-theme/dark">Set Dark Theme</a>
      </body>
    </html>`)
})
app.listen(3000)
