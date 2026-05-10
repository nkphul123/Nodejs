import express from 'express'
const app = express()
import session from 'express-session'
app.use(
    session({
        secret: "mySecretKey",
        resave:false,
        saveUninitialized:false
    })
)
app.get('/login', (req, res)=>{
    req.session.user={username:"Navneet", role:"admin"}
    res.send("User logged in and saved in  session")
})
app.get('/dashboard', (req, res)=>{
    if(req.session.user){
        res.send(`Welcome ${req.session.user.username}`)
    }
    else{
        res.send("Please log in first")
    }
})
app.get('/logout', (req, res)=>{
    req.session.destroy((err)=>{
        if(err){
            res.send("Error while logging out")
        }
        else{
            res.send("Successfully logged out")
        }
    })
})
app.listen(3000)