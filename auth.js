const express=require('express');
const router=express.Router();

const mongoose= require('mongoose')

const User = mongoose.model('User')

const bcrypt = require('bcrypt')

const jwt =require('jsonwebtoken')
const {JWT_SECRET}=require('../keys')

const requiredLogin= require('../middleware/requiredLogin')




router.post('/signup',(req,res,next)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
       return res.status(404).send("Please fill all the details !")
        
    }
   User.findOne({email:email})
   .then((savedUser)=>{
       if(savedUser){
           return res.status(422).json({error:"User already exist with this email"})
       }else{
           bcrypt.hash(password,20)
           .then(hashedpassword=>{
            const user =new User({
                email,
                password:hashedpassword,
                name,
                balance:20000
            })
            user.save()
            .then(user=>{
                res.json({message:"saved successfully !"})
            })
            .catch(err=>{
                
             console.log(err)
            })
           })
         
       }

   }).catch(err=>{
       console.log(err)
   })
   

    
})



router.post('/signin',(req,res,next)=>{
    
    const {email, password}=req.body;
    if(!email || !password){
        return res.status(422).send("Please fill all the details !")
         
     }
    User.findOne({email:email})
    .then(savedUser=>{
        if(savedUser){
         bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
            const token =jwt.sign({_id:savedUser._id},JWT_SECRET)
            res.json({token})
        }else{
                return res.status(422).json({error:"Invalid Email or Password"})
            }
        }).catch(err=>{
            console.log(err)
        })
    }else{
        return res.status(422).json({error:"Invalid Email or Password"})
    }
    }).catch(err=>{
        console.log(err)
    })

})
router.get('/getallusers',(req,res)=>{
    console.log("OKKKKKKKKKKKKKKKKKKK")
})
module.exports = router
