const mongoose = require("mongoose")

const VoterSchema = new mongoose.Schema({
    accountAddress:{
        type: String,
        required: true
    },
    imageName:{
        type: String,
        required: true
    }
})

const voterModel = mongoose.model("voter",VoterSchema)

module.exports = voterModel