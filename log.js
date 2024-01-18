const express = require("express");
const app = express();
app.use(express.json());
const cookies = require("cookie-parser");
app.use(cookies());
require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyToken = require("./Tokens/Verify")
const generateToken = require("./Tokens/Generate")
const mongoose = require("mongoose");
const { connectDatabase }= require("./connect/db")

app.post("/signup", ()=>{
    try {
        return res.json ({ success: true , message: "Hi from signup API"})
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false , error : error.message})
    }
});
connectDatabase();
app.listen(6000 , ()=>{
    console.log("Server is running at port 6000")
});
