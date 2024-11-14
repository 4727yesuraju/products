import express from 'express';

//to access envirornment variables
import {config} from 'dotenv';
import { connectDB } from './config/db.js';
config()


const app = express();

app.get("/",(req,res)=>{
    res.send("server is ready")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`)
})