const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const requireLogin = require('../middleware/requiredLogin')

router.post('/creatpost',requireLogin,(req,res)=>{
    const {title,body}=req.body
    if(!title||!body){
        return res.status(422).json({error:"Please add all the fields "})
    }
   
    const post=new Post({
        title,
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        return res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/getposts',(req,res)=>{
    Post.find()
    .populate("postedBy","_id name ")
    .then(posts=>{
        return res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myposts',requireLogin,(req,res)=>{
    Post.find({postedBy : req.user._id})
    .populate("postedBy","_id name ")

    .then(mypost=>{
        res.json({mypost})
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router