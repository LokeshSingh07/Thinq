// const express = require('express')
import express from 'express';
const app = express();


app.get('/', (req,res)=>{
    return res.json({msg: 'server is ready'});
})

const PORT = process.env.PORT || 4040;


// app.use(express.static('dist'));         // bad pratice





app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke',
        },
        {
            id: 2,
            title: 'A joke',
            content: 'This is a joke',
        },
        {
            id: 3,
            title: 'A joke',
            content: 'This is a joke',
        },
        {
            id: 4,
            title: 'A joke',
            content: 'This is a joke',
        },
        {
            id: 5,
            title: 'A joke',
            content: 'This is a joke',
        },
    ];
    res.send(jokes);
});




app.listen(PORT, ()=>{
    console.log(`server at ${PORT} PORT`);
})