
import loginImage from "../images/signin.png"

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import useAuth from '../MyHooks/useAuth';
import { useAppcontext } from '../Context/context/appContext';
// import signin from './signin.png'

function SingIn() {

  const { setLogin } = useAuth();
  axios.defaults.withCredentials = true;


  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token === "Logged IN") {
  //     setLogin(true);
  //     navigate("/Dashboard", { replace: true });
  //   }
  // }, []);


    const initialState = {
        name: "",
        Email: "",
        Password: "",
        RePassword: "",
        role : ""
      };
      
        const [values, setValues] = useState(initialState);
      
        const {  setupUser, user} = useAppcontext();
      
        const navigate = useNavigate();
      
        useEffect(() => {
          if(user){
            setTimeout(() => {
              navigate('/Dasboard');
              setLogin(true);
            }, 3000);
          }
        }, [user, navigate])
        
      
      
        const toggleMember  = () => {
          setValues({...values, isMember : !values.isMember});
        }
      
        const handleChange = (e) => {
          // console.log(e.target.value);
          setValues({...values, [e.target.name] : e.target.value
                    })
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // if((values.name === "" ) || values.Email === "" || (values.Password === "")){
          //   //   displayAlert("Please fill all the feilds", "error");

          //   console.log("Please fill all the feilds");
          //   return ;
            
          // }

          // if(values.Password !== values.RePassword){

          //   console.log("Password not matched");
          //   return;
          // }

          setupUser({  Email : values.Email, Password : values.Password},  'login');
        //   else{
        //     if(values.isMember){
        //       setupUser({email : values.email, password : values.password},  'login');
        //     }
        //     else {
        //       setupUser({name : values.name, email : values.email, password :values.password, role : values.role}, 'register');
        //     }
      
      
        //   }
      
        };
      





    

    
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2'>

      <div className="flex justify-center items-center h-screen ">
        <form >
          <div className="sm:w-128 w-98 p-6">
            <h1 className="sm:text-5xl text-4xl block font-heading text-black mt-10">
              Login
            </h1>
            <div className="grid gap-6 sm:my-24 mt-10">
              <div className="rounded-sm">
                <label className="block sm:text-xl text-base mb-2 font-heading">
                  Email
                </label>
                <input
                value={values.Email}
                onChange={handleChange}
                name='Email'
                  type="text"
                  className="sm:border-3 border-1 border-main w-full text-base
                px-2 sm:py-2 py-2 font-sub bg-background rounded-md"
                  placeholder="Enter email..."
                />
                
              </div>
              <div className="rounded-sm">
                <label className="block sm:text-xl text-base mb-2 font-heading">
                  Password
                </label>
                <input
                 value={values.Password}
                  onChange={handleChange}
                  name='Password'
                  type="password"
                  className="sm:border-3 border-1 border-main w-full text-base
                px-2 sm:py-2 py-2 font-sub bg-background rounded-md
                "
                  placeholder="Enter Password..."
                />

              </div>
              
            </div>
           
            <div className="sm:mt-12 mt-28 flex justify-center items-center">
              <button
              onClick={handleSubmit}
                type="submit"
                className="block text-center text-main  outline-none bg-[#DFECED]  cursor-pointer
                sm:py-2 py-2 sm:px-24 text-xl w-full border-1 border-[#1E7C83] rounded-md"
              >
                Login
              </button>
            </div>
            <div className="lg:hidden mt-1 flex justify-center items-center text-center">
              <p className="text-black ">
                Don’t have an account?{" "}
                <Link to="Register" className="underline text-main">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden sm:block"
      style={{backgroundImage:"url("+ loginImage +")"}}
      >
        <div className="flex justify-center items-center h-screen">
        <div className="w-98 p-6">
            <h1 className="sm:text-4xl text-3xl block font-heading text-white mt-10 text-center">
              Welcome Back!!!
            </h1>
            <p className="text-xl text-white w-80 text-center">
            Please login to your
            account with given details
            to continue
            </p>
            <p className="text-xl text-white text-center mt-80">
            New here? Create an account.
            </p>
            <div className="sm:mt-12 mt-2 flex justify-center items-center">
           
              <button
                onClick={()=>{
                  navigate('/Register', {
                    replace: true
                  });

                }}
                type="submit"
                className="block text-center text-white  outline-none bg-transparent  cursor-pointer
                px-2 py-2  text-xl w-full border-2 border-white rounded-md"
              >
                Sign Up
              </button>
          
            </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SingIn