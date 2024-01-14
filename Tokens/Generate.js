const jwt = require("jsonwebtoken")
const generateToken = (userid)=>{
    try {
        // const token = jwt.sign( payload, "secretkey" , {expiresIn : "24h"})
        const token = jwt.sign({id : userid} , "secretkey" , {expiresIn: "1h"}  )
        return token;
    } catch (error) {
        console.log(error);
    }
}
module.exports = generateToken;