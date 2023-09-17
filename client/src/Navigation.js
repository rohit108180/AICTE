import React from 'react';
import {Link,Outlet,useNavigate} from "react-router-dom"
import axios from "axios"
import useAuth from './MyHooks/useAuth';
const Navigation =(props)=> {
  const navigate = useNavigate()  
  const { setLogin } = useAuth();
  const Logout =async()=>{
    try{  
    const response = await axios.post("http://localhost:4000/user/logout")
      setLogin(false)
      localStorage.removeItem('token');
      navigate("/", { replace: true });
    }catch(err){
      console.log(err)
    }
    }
        return (
            <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-back ">
           <div className="navbar-nav">
           <Link className="nav-item nav-link " to="/Dashboard">Home </Link>
           <Link className="nav-item nav-link " to="/Profile">Profile </Link>
           
              <span style={{position: 'absolute',right: 0}}>
              <button style={{border:0}} className="nav-item nav-link bg-dark" onClick={Logout}>Logout </button>
              </span>
            </div>
        </nav >
        <div className='all' >
         
        <Outlet/>
        </div>
        </>
          );
}
 
export default Navigation;