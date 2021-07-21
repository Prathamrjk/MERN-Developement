import React from 'react'
import {Link} from 'react-router-dom';


const Navbar =()=>{
    return(
   
        <nav>
        <div className="nav-wrapper black" >
          <Link to="#" className="brand-logo font-weight: bold  ">My Bank</Link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/login">Customers</Link></li>
            <li><Link to="/signup">All Transaction</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
             
    )
}
export default Navbar