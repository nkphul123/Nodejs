import express from 'express'
import session from 'express-session'
const app = express()
app.use(session({
    secret: "mysession",
    resave: false,
    saveUninitialized: false
}))
app.use(express.urlencoded({extended:false}))
app.get("/", (req, res)=>{
    res.send(`
        <form action='/dashboard' method='POST'>
        <input type='text' name='username'><br>
        <input type='password' name='password'><br>
        <input type='submit' value='Login'>
        </form>
    `)
})
app.post("/dashboard", (req, res)=>{
    const {username, password} = req.body
    req.session.user = {username: username, password:password}
    res.redirect("/dashboard")
})
app.get("/dashboard", (req, res)=>{
    if(req.session.user){
        res.send(`
            <h3>Welcome to dashboard, ${req.session.user}</h3>
            <a href='/logout'><button>Logout</button></a>
        `)
    }
    else{
        res.send("<h3>Please login first</h3>")
    }
})
app.get("/logout", (req, res)=>{
    req.session.destroy(()=>{
        res.redirect("/")
    })
})
app.listen(3000)