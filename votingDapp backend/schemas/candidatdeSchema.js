const mongoose = require("mongoose")

const candidateSchema = new mongoose.Schema({
    accountAddress:{
        type:String,
        required:true

    },
    imageName:{
        type:String,
        required:true

    }
})

const candidateModel = mongoose.model("candidate",candidateSchema)
module.exports = candidateModel;



