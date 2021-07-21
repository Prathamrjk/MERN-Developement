const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User =mongoose.model('User')


router.get('/getusers',(req,res)=>{
    User.find()
    .then(users=>{
        return res.json({users})
    })
    
})

router.put('/transaction',async(req,res)=>{
 
try{
    //const new_balance=req.body.balance
const id1 =req.body.myId
const id2 =req.body.userId

const new_mybal=req.body.new_myBal
const new_hisbal=req.body.new_hisBal


await User.findByIdAndUpdate(id1,{
    balance : new_mybal
},function(err,docs){
    if(err){
        return res.json({error:err})
    }else{


User.findByIdAndUpdate(id2,{
    balance : new_hisbal
   
},function(err,docs){
    if(err){
        return res.json({error:err})
    }else{

        return res.json({message:"Transaction Sucessfull"})

    }

})




    }

});


}catch(err){
console.log(err)
}


})

module.exports=router 