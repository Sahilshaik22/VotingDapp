const express = require("express")
const ethers =  require("ethers")
const jwt = require("jsonwebtoken")
const router = express()

router.post("/authentication",async(req,res)=>{
    try{
        const {accountAddress} = req.query;
        const {signature} = req.body;
        if(!accountAddress || !signature){
            return res.status(500).json({message:"authentication failed"})
        }
    
        const message = "Welcome to Voting Dapp You accpet terms and conditions";
        const recoverAddress =  ethers.verifyMessage(message,signature)
    
        if(recoverAddress.toLowerCase() == accountAddress.toLowerCase()){
            const token = jwt.sign({accountAddress},"secretKey");
            return res.status(200).json({message:"Authentication SuccessFull",token:token})
    
        }else{
            throw new Error("recovery address not same as address account")
        }

    }catch(error){
        console.log(error,"error in authentication Route")
        return res.status(500).json({message:"Authentication failed",error:error.message})
    }



})

module.exports = router;