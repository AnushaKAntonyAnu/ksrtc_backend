const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt =require("bcryptjs")
const {usermodel}=require("./models/register")


const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://anusha:anusha13@cluster0.hyxpaoy.mongodb.net/busDB?retryWrites=true&w=majority&appName=Cluster0")

const generateHashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}


app.post("/reg",async(req,res)=>{
    let input = req.body
    let hashedPassword = await generateHashedPassword(input.password)
    console.log(hashedPassword)
    input.password = hashedPassword
    let register = new usermodel(input)
    register.save()
    res.json({ "status": "success" })
   
})


app.listen(8080,()=>{
    console.log("server started")
})
