import express from 'express'
import cookieSession from 'cookie-session'
const app = express()

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge : 15000
}))

// app.use((req, res, next)=>{
//     req.sessionOptions.maxAge= 15000;
//     next()
// })
app.get('/login', (req, res)=>{
    req.session.user = "Najesh";
    res.send("Session created")
})

app.get('/dashboard', (req, res)=>{
    if(req.session.user){
        res.send(`Welcome back, ${req.session.user}`)
    }
    else{
        res.send('Please log in first')
    }
})
app.listen(3000)

// ✅ Practical Task: 
// Q. Create a Node.js Express application that tracks how many times a user has visited the homepage using session cookies.
// Solution -? Try yourself
// import express from 'express';
// import cookieSession from 'cookie-session';
// const app = express();

// app.use(cookieSession({
//   name: 'visitSession',
//   keys: ['secretkey123'],      
//   maxAge: 15000
// }));

// app.get('/', (req, res) => {
//   if (!req.session.views) {
//     req.session.views = 1;
//   } else {
//     req.session.views++;
//   }
//   res.send(`You have visited this page ${req.session.views} times`);
// });

// app.get('/reset', (req, res) => {
//   req.session = null; 
//   res.send('Visit count reset successfully');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
