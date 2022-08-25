const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoConfig = require("./config")

const userRouter = require("./routes/users")

require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 8888

app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.json())


app.use("/user", userRouter)

app.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
})

app.listen(PORT, ()=>{
    mongoConfig()
    console.log(`server is chillin' on: ${PORT}`)
})
