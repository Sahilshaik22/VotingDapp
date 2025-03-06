const jwt = require("jsonwebtoken")

const authentication = async(req,res,next)=>{
    try{
        const token = req.header('x-access-token')
        // const {accountAddress} = req.body;
        if(!token){
            res.status(500).json({message: 'No token available.'})
        }
        const decoded = jwt.verify(token, "secretKey")
        req.accountAddress = decoded.accountAddress
        console.log(decoded)
        next()
    


    }catch(error){
        console.log(error,"error in middle ware authentication")
    }



}
module.exports = authentication;



