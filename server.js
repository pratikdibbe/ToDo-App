const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path");


const routes = require('./routes/ToDoRoutes');


require("dotenv").config()

const app = express()
const PORT  = process.env.port || 7000

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connected to mongoose`))
.catch((err)=>console.log(err))

app.use(routes)

app.listen(PORT,()=>console.log(`listening on : ${PORT}`))

