import React from 'react';
import { Link } from 'react-router-dom';

const Login =()=>{
    return(
        <div className="mycard input-field input">

        <div className="auth-card" >
            <h2>Social City</h2>
           
            <input
                type="text"
                placeholder="Email"></input>

            <input
            
                type="text"
                placeholder="Password"></input>

            <button className="btn waves-effect waves-light color: #64b5f6 blue lighten-2" type="submit" name="action">
                Login
            </button>
<h6>
<Link to ="/signup"> Already have an account ?</Link>
</h6>

        </div>
        

    </div>
    )
}
export default Login