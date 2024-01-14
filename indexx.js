const express = require("express");
const app = express();
app.use(express.json());
const cookies = require("cookie-parser");
app.use(cookies());
require("dotenv").config();
const verifyToken = require("./Tokens/Verify")
const generateToken = require("./Tokens/Generate")


// const LOGGEDin = (req, res , next)=>{
//     console.log("This tab belongs for LOGGEDin users only ");
//     if (req.cookies.auth_tk){
//         return res.json({ success: true , message : "This are LOGGEDin profile "})
//     }else{
//         return res.json ({ success: false , message : "You are not LOGGEDin "})
//     }
//     next();
// }

// const PRO = (req, res , next)=>{
//     console.log("This tab belongs for PRO users only ");
//     if (req.cookies.auth_tk && req.cookies.pro_tk){
//         return res.json({ success: true , message : "This is only for PRO users"})
//     }else{
//         return res.json ({ success: false , message : "You are not PRO user "})
//     }
//     next();
// }

// const ULTRAPRO = (req , res, next)=>{
//     console.log("This tab belongs for ULTAPRO user only");
//     if (req.cookies.ultra_tk && req.cookies.auth_tk && req.cookies.pro_tk) {
//         return res.json ({ success : true , message : "This is for only ULTRAPRO users "})
//     } else {
//         return res.json ({ success: false , message : "You are not ULTAPRO user "}) 
//     }
//     next();
// }
// app.get ("/public" ,  (req , res , next)=>{
//     console.log("This is public tab")
//     try {
//         return res.json({success: true , message: "Hello this is public API"})
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({success: false , error: error.message});
//     }
//     next();
// });
// app.post("/login" , LOGGEDin,  (req, res , next)=>{
//     console.log("This is LOGGEDin user")
//     res.cookie("auth_tk" , "srijalgupta0901" )
//     try {
//         const logintime = new Date();
//         return res.json({ success: true , message : "Hello  LOGGEDin cookie is generated"})
//     } catch (error) {
//         return res.status(400).json({success: false , error: error.message});
//     }
//     next();
// })
// app.get("/profile", (req , res , next)=>{
//     try {
//         res.cookie("auth_tk" , "srijalgupta0901" )
//         console.log("This is LOGGEDin profile")
//         res.json({success: true , message: "You are LOGGEDin user with you profile"})
//     } catch (error) {
//         return res.status(400).json({success: false , error: error.message});
//     }
//     next();
// })

// app.get ("/friends" , PRO ,(req, res , next)=>{
//     res.cookie("pro_tk" , "srijalgupta0901pro" )
//     try {
//         return res.json({ success: true , message : "Hello PROcookie is generated"})
//     } catch (error) {
//         return res.status(400).json({success: false , error: error.message});
//     }
//     next();
// })
// app.get ("/chats" ,  ULTRAPRO , (req, res , next)=>{
//     res.cookie("ultra_tk" , "srijalgupta0901ultrapro" )
//     try {
//         return res.json({ success: true , message : "Hello ULTAPROcookie is generated"})
//     } catch (error) {
//         return res.status(400).json({success: false , error: error.message});
//     }
//     next();
// })

app.post("/gen/login" , (req, res)=>{
    try {
        // console.log(req.body);
        let userid = req.body.userid;
        
        if (req.body.password === 12345) {
        const token = generateToken(userid);
        console.log(token);
        res.cookie("gen_tk" , token);
        return res.json({ success: true , message: " Token is generated"})
        } else {
            return res.status(400).json({ success: false, error: "Incorrect credentials" });
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ success : false , message: error.message})
    }
})

app.get("/ver/token" , (req , res, next)=>{
    if (verifyToken(req.cookies.gen_tk)) {
        const userid = verifyToken(req.cookies.gen_tk);
        console.log(userid);
        return res.json ({ success: true , message : "Cookies verified"});
        next();
      } else {
        return res.status(400).json({ success: false, error: "UNAUTHORIZED" });
      }
})
app.listen(5000 , ()=>{
     console.log("Server is running at port 5000")
});