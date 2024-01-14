const jwt = require("jsonwebtoken");
const verifyToken = (token)=>{
    try {
        const result = jwt.verify(token , "secretkey")
        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = verifyToken ;