import express from "express"
import {ENV} from "./config/env.js"
import {connectDB} from "./config/db.js"

const app=express();

connectDB();

app.get("/",(req,res)=>{
    res.send("Hello  from backend")
})

app.listen(ENV.PORT,()=>console.log("Server is up and runnig on ",ENV.PORT));