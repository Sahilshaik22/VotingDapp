const express = require("express")
const authentication = require("../middlewares/authentication")
const VoterSchema = require("../schemas/voterSchema")
const multer = require("../middlewares/multer")
const router =  express()


router.post("/postVoterDetails",authentication,multer.uploadVoterImage,async(req,res)=>{
    try{
        const {accountAddress} = req;
        const imageName = req.file.filename;;
        const savevoterDetails = await VoterSchema.create({
            accountAddress:accountAddress,
            imageName:imageName

        })
        console.log(savevoterDetails)
        return res.status(200).json({message:"successfull"})
        

    }catch(error){
        console.log(error,"error in postVoterDetails router")
    }

})

module.exports = router;