import express from 'express'
const app = express()

const myLogger = (req, res, next)=>{
    console.log('BEFORE LOGGED')
    console.log('AFTER LOGGED')
    next()
}
// app.use(myLogger)
app.get('/', myLogger, (req, res)=>{
    console.log("Welcome");
    res.send("Welcome")
})

app.get('/home', (req, res)=>{
    console.log("This is home");
    res.send("This is home")
})

app.listen(3000)

// import express from 'express'
// const app = express()

// const myLogger = (req, res)=>{
//     console.log('LOGGED')
// }
// app.get('/', (req, res, next)=>{
//     console.log("This is Welcome 1");
//     res.send("This Welcome 1")
//     next()
//     console.log("This is Welcome 2")
// })
// app.use(myLogger)
// app.listen(3000)