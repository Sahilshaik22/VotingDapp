const multer = require("multer")
const path = require("path")

const storage = destination => multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `votingSystem/${destination}`)
    },
    filename: function (req, file, cb) {
      const accountAddress = req.accountAddress;
      cb(null, accountAddress+path.extname(file.originalname))
    }
  })
  
  module.exports = {
    uploadCandidateImage : multer({storage: storage("candidateImage")}).single("file"),
    uploadVoterImage: multer({storage:storage("voterImage")}).single("file")

  }

