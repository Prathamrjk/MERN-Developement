const express = require('express')
const app=express()
const PORT=8000

const mongoose= require('mongoose')
const {AUTH_URI}=require('./keys')



require('./models/user')
require('./models/post')

let cors = require("cors");
app.use(cors());


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/bank'))






mongoose.connect(AUTH_URI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('error',(err)=>{
    if(!err){
        console.log("Success")
    }else{
        console.log("Error While Connecting:"+err)
    }
})

mongoose.connection.on('connected',()=>{
    console.log("Connected to Database")
})


app.listen(PORT,()=>{
    console.log("Server running at :"+PORT)
})






