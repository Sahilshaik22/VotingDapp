const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")
const connectDb = require("./db/connectDb")
const authenticationRouter =  require("./routes/authenticationRouter")
const voterRouter = require("./routes/voterRouter")
const candidateRouter = require("./routes/candidateRouter")

const PORT = 3000
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.use("/api",voterRouter)
app.use("/api",authenticationRouter)
app.use("/api",candidateRouter)
app.use("/images",express.static(path.join(__dirname,"votingSystem")))
const connectDB = async()=>{
    try{
        await connectDb(process.env.MONGO_uRL)
        console.log("connected to database")
        app.listen(PORT,()=>{
            console.log("server is running on port 3000")
        })

    }catch(error){
        console.log(error,"Error in connectDB")
    }
}

connectDB();
