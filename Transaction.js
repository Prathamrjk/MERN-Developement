import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import  {useHistory, useLocation}  from 'react-router-dom';


const Transaction =(props)=> {

const [isVisible,setVisible]=useState(true);
const[selectedUserName, setName]=useState('');
const[userId,setId]=useState('');
const[userBalance,setBalance]=useState(1)

const[Ammount,setAmmount]=useState(1)

const[hisAmmount,setHisAmmount]=useState(0)

const[myAmmount,setMyAmmount]=useState(0)



let location=useLocation();


    const [user, setUser]=useState([]);

    useEffect(()=>{
       loadUser();
    },[]);

const loadUser =async()=>{
    const result=await axios.get("http://localhost:8000/getusers");
  
   console.log(result.data.users)
  
    setUser(result.data.users);
    
   
};


const receiverSelected=(id,name,balance)=>{
    setVisible(false)
    setName(name)
    setBalance(balance)
    setId(id)
}

const handleSubmit =async(event)=>{

  event.preventDefault()


}
const calculate= async()=>{




await setHisAmmount(Number(userBalance)+Number(Ammount))
await setMyAmmount(Number(location.state.balance)-Number(Ammount))








}

const history=useHistory()

const update= async()=>{


  const myBal=location.state.balance
  const hisBal=userBalance
  
  const new_myBal=myBal
  const new_hisBal=hisBal
  
  
  const myId=location.state._id;

alert(hisAmmount)
 const update =await axios.put('http://localhost:8000/transaction',{myId:myId,
 userId:userId,
 new_myBal:myAmmount,
 new_hisBal:hisAmmount})
history.push({pathname:'./'})
}











        return ( 
           
          <div   >
             
              
              <img src="https://images.unsplash.com/photo-1567427013953-88102117053a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              style={{width:'70%',display:'inline-flex', position:'absolute',left:'20%',top:'65px'}}></img>

              <div style={{position:'absolute', top:'90px',left: '90px'}}>

          <h1>Wellcome <span  style={{color:'red'}}>{location.state.name}</span> </h1>
              
              <h4>You Have</h4>
              
              <h1 onClick={()=>setVisible(false)}>Rs. {location.state.balance} .00</h1>
              <h6>In Your Account</h6>
            
              {isVisible?
              <div>
 <h4 style={{color:'green',fontWeight:'bold'}}>Select Customer To Send Money </h4>
              
             
              <table class="table">
                
  <thead class="table table-dark table-striped ">
    <tr>
      <th scope="col">Name</th>
      
      <th scope="col">Balance</th>
      <th scope="col">Option</th>
    </tr>
  </thead>:<h1></h1>
  <tbody>
    {

        user.map((item,index)=>{
            if( location.state.name!=item.name){
          return(
              
            <tr>
                        
                        <td>{item.name}</td> 
                        
                        <td><h5>Rs.{item.balance}</h5></td>
                    
                       <td>
                           
                        <button class="btn btn-outline-primary " 
                         
                        onClick={()=>
                            receiverSelected(item._id,item.name,item.balance)
                            
                            
                        }
                        > <pre>    Select   </pre>      </button>
                         {/* <Link class="btn btn-outline-primary" to ={{pathname:"/transaction_step2",state:"Pratham"}}>Select User</Link> */}
                       </td>
                        </tr>
                      )
          }

                   
        }
          
            
       )
    }
  </tbody>

</table></div>:
<div >
    <span>
    
<h4 style={{color:'green'}}><span style={{color:'red', fontWeight:'bold',fontSize:'50px'}}>{selectedUserName}</span>  </h4>
<h6>Is Selected to Send Money</h6>
<h3>Please Enter Ammount to send</h3>
<form onSubmit={handleSubmit} action="/action_page.php">
  <label for="fname">Ammount to Send :</label>
  <input type="number" id="fname" name="fname" value={Ammount} onChange={e=>setAmmount(e.target.value)}></input><br></br><br></br>
 
  <input class="btn btn-outline-primary"  type="submit" onClick={()=>calculate()} value="Send"  width='500px'height='80px'
></input>
</form>

</span>        
    <h1>Confirm to Send Rs.</h1>
    <button class="btn btn-outline-primary "width="1000px" onClick={()=>update()}>Confirm</button>
    </div>}
              </div>
          </div>
         );

         
   
}
 
export default Transaction;
