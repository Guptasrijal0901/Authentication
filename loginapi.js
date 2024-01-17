const express = require("express");
const app = express();
app.use(express.json());
const cookies = require("cookie-parser");
app.use(cookies());
require("dotenv").config();
const verifyToken = require("./Tokens/Verify")
const generateToken = require("./Tokens/Generate")

app.get("/login/verify" , (req, res, next)=>{
    try {
        console.log("This is login API")
        return res.json ({sucess: true , message : "loginapi ia made"})
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false , message: "error.message"})
    }
}
)
app.listen(8000 , ()=>{
    console.log("Server is running at port 8000")
});
