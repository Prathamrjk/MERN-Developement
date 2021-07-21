import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import {useHistory} from 'react-router-dom'
import Transaction from './Transaction'
import { left, right } from '@popperjs/core';


const BankUser =()=>{
    const [user, setUser]=useState([]);

    useEffect(()=>{
       loadUser();
    },[]);


const loadUser =async()=>{
    const result=await axios.get("http://localhost:8000/getusers");
  
   console.log(result.data.users)
  
    setUser(result.data.users);
    
   
};




const history = useHistory();
const routeChange = (name,balance,id) =>{ 
  let path = './transaction_step2'; 
  
  history.push({pathname:path,state: {_id: id, name: name,balance:balance}});
}



    return(
      <div className='div'>
       
<div style={{maxWidth:"900px",width:"700px", alignItems: 'center',position:'absolute', left: '600px',marginTop:'60px'}}>



<div className='div1'>
<div><h2>Please Select Account For Sending Money </h2></div>
<table class="table position:'absolute' left:'10px' ">
  <thead class="table table-dark table-striped " >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Balance</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    {

        user.map((item,index)=>{
           
          return(
              
            <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td> 
                        <td> {item.email}</td>
                        <td><h5>Rs.{item.balance}</h5></td>
                    
                       <td>
                           
                        <button class="btn btn-outline-primary" 
                         onClick={()=>routeChange(item.name,item.balance,item._id)}
                        
                        >Select</button>
                         {/* <Link class="btn btn-outline-primary" to ={{pathname:"/transaction_step2",state:"Pratham"}}>Select User</Link> */}
                       </td>
                        </tr>
                      )

                   
        }
          
            
       )
    }
  </tbody>
</table>
</div>
</div>
</div>
    )
  
}

export default BankUser