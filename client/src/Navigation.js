import React from 'react';
import {Link,Navigate,Outlet,useNavigate} from "react-router-dom"
import axios from "axios"
import useAuth from './MyHooks/useAuth';

import "./navbar.css"
import { Button } from '@mui/material';
const Navigation =(props)=> {
  const navigate = useNavigate()  
  const { setLogin ,Login} = useAuth();


  const handleClick =async()=>{

    if(Login){
        try{  
        const response = await axios.post("http://localhost:4000/user/logout")
          setLogin(false)
          localStorage.removeItem('token');
          navigate("/", { replace: true });
        }catch(err){
          console.log(err)
        }
      }
      else{
        navigate("/login",{replace:true}
          )
      }
    }
 

        return (
            <>
            {!Login?
         <nav className="">
           <div className="navbar" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row", width :"100%" }}>
            <div  style={{display:"flex", flexDirection:"row", }}>
           <Link className=" navlink" to="/Dashboard">Home </Link>
           <Link className=" navlink" to="/Profile">Profile </Link>
           
           
           <Link className=" navlink" to="/Profile">Analytics </Link>
           
           <Link className=" navlink" to="/Profile">Resources </Link>
           
           <Link className=" navlink" to="/Profile">Dashboard </Link>
           </div>

            
              <span style={{position: 'absolute',right: "5rem"}}>
              <Button variant ="contained" onClick={handleClick}>{Login?"Logout":"Login / Signup"} </Button>
              </span>
            </div>
        </nav > : 
        
        <nav className="">
        <div className="navbar" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row", width :"100%", backgroundColor: "#1E7C83"}}>
         <div  style={{display:"flex", flexDirection:"row", }}>
        <Link className=" navlink loggedin" to="/Dashboard">Home </Link>
        <Link className=" navlink loggedin" to="/Profile">Profile </Link>
        
        
        <Link className=" navlink loggedin" to="/Profile">Analytics </Link>
        
        <Link className=" navlink loggedin" to="/Profile">Resources </Link>
        
        <Link className=" navlink loggedin" to="/Profile">Dashboard </Link>
        </div>

         
           <span style={{position: 'absolute',right: "5rem"}}>
           <Button variant ="contained" color='secondary' onClick={handleClick}>Logout </Button>
           </span>
         </div>
     </nav > 
        
        
        }
        <div className='all' >
         
        <Outlet/>
        </div>
        </>
          );
}
 
export default Navigation;