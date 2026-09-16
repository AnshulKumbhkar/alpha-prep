import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db_connection.js';

dotenv.config();

const app = express();

const Port = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send("hello world ")
})

connectDB()
.then(()=>{
    app.listen(Port,()=>{
          console.log(`server ius running at http://localhost:${Port}`)
    })
})
.catch((err)=>{
    console.log("db connection failed",err)
})