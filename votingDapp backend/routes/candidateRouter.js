const express = require("express")
const candidateSchema =  require("../schemas/candidatdeSchema")
const authentication = require("../middlewares/authentication")
const multer = require("../middlewares/multer")
const router =  express()


router.post("/postCandidateDetails",authentication,multer.uploadCandidateImage,async(req,res)=>{
    try{
        const {accountAddress} = req;
        const imageName = req.file.filename;
        const saveCandidateDetails = await candidateSchema.create({
            accountAddress:accountAddress,
            imageName:imageName

        })
        console.log(saveCandidateDetails)
        return res.status(200).json({message:"successfull"})
        

    }catch(error){
        console.log(error,"error in postCandidateDetails router")
    }

})

module.exports = router;