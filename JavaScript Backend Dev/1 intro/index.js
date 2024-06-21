const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;




app.get('/', (req,res)=>{
    res.send("Hello jii");
})

app.get('/twitter', (req,res)=>{
    res.send("twitter");
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login at xoid</h1>');
})

app.get('/youtube', (req,res)=>{
    res.send("<h2>Chai aur backend</h2>")
})
 

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})
