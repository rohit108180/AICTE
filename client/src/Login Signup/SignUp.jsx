
import signupImage from "../images/signup.png"


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import useAuth from '../MyHooks/useAuth';
import { useAppcontext } from '../Context/context/appContext';
// import signin from './signin.png'

function SignUp() {

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
        role : "Educator"
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
      
          if((values.name === "" ) || values.Email === "" || (values.Password === "")){
        

            console.log("Please fill all the feilds");
            return ;
            
          }

          if(values.Password !== values.RePassword){

            console.log("Password not matched");
            return;
          }

          setupUser({name: values.name , Email : values.Email, Password : values.Password, role :values.role},  'register');


      
        };
      




  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
    <div className="hidden sm:block bg-no-repeat h-screen"
      style={{backgroundImage:"url("+ signupImage +")"}}
      >
        <div className="flex justify-center items-center h-screen">
        <div className="w-98 p-6">
            <h1 className="sm:text-4xl text-3xl block font-heading text-white mt-10 text-center">
              Hey There!!
            </h1>
            <p className="text-xl text-white w-80 text-center">
            Please provide
            information to register
            your account.
            </p>
            <p className="text-xl text-white text-center mt-80">
            Already have an account? Login.            </p>
            <div className="sm:mt-12 mt-2 flex justify-center items-center">
           
              <button
              onClick={()=>{
                navigate('/login',{
                  replace : true
                });
              }}
                type="submit"
                className="block text-center text-white  outline-none bg-transparent  cursor-pointer
                px-2 py-2  text-xl w-full border-2 border-white rounded-md"
              >
                Login
              </button>
              
            </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-background">
        <form >
          <div className="sm:w-128 w-98 p-6">
            <h1 className="sm:text-5xl text-4xl block font-heading text-black mt-10">
              Sign Up
            </h1>
            <div className="grid gap-2 sm:my-16 mt-4">
              <div className="rounded-sm">
              
              <label className="block sm:text-xl text-base mb-2 font-heading">
                  Name
                </label>
                <input
                value={values.name}
                onChange={handleChange}
                name='name'
                  type="text"
                  className="sm:border-3 border-1 border-main w-full text-base
                px-2 sm:py-2 py-2  rounded-md"
                  placeholder="Enter your name..."
                />
                </div>
              
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
                px-2 sm:py-2 py-2  rounded-md"
                  placeholder="Enter email..."
                />
                
              </div>
              <div className="rounded-sm">
                <label className="block sm:text-xl text-base mb-2 font-heading">
                  Role
                </label>
                <select  
                onChange={handleChange}
                name='role'
                value={values.role}
                className="sm:border-3 border-1 border-main w-full text-base
                px-2 sm:px-3 py-2  rounded-md">
                  {/* <option selected>Choose a Role</option> */}
                  <option value="Admin">Admin</option>
                  <option value="Educator">Educator</option>
                  <option value="Curriculum Developer">Curriculum Developer</option>
                </select>
                
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
                px-2 sm:py-2 py-2 d rounded-md
                "
                  placeholder="Enter Password..."
                />

              </div>
              <div className="rounded-sm">
                <label className="block sm:text-xl text-base mb-2 font-heading">
                  Confirm Password
                </label>
                <input
                 value = {values.RePassword}
                  onChange={handleChange}
                  name='RePassword'
                  type="password"
                  className="sm:border-3 border-1 border-main w-full text-base
                px-2 sm:py-2 py-2  rounded-md
                "
                  placeholder="Enter Password..."
                />

              </div>
              
            </div>
           
            <div className="mt-12 sm:mt-12 flex justify-center items-center">
              <button
              onClick={handleSubmit}
                type="submit"
                className="block text-center text-main  outline-none bg-[#DFECED]  cursor-pointer
                sm:py-2 py-2 sm:px-24 text-xl w-full border-1 border-[#1E7C83] rounded-md"
              >
                Sign Up
              </button>
            </div>
            <div className="lg:hidden mt-1 flex justify-center items-center text-center">
              <p className="text-black font-sub">
                Don’t have an account?{" "}
                <Link to="/" className="underline text-main">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      
    </div>
    </>
  )
}

export default SignUp