import React from 'react'
import { Link } from "react-router-dom";
import signupImage from "../images/signup.png"


function SignUp() {
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
              <Link to="/" className="w-60 no-underline">
              <button
                type="submit"
                className="block text-center text-white  outline-none bg-transparent  cursor-pointer
                px-2 py-2  text-xl w-full border-2 border-white rounded-md"
              >
                Login
              </button>
              </Link>
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
                  Email
                </label>
                <input
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
                <select  className="sm:border-3 border-1 border-main w-full text-base
                px-2 sm:px-3 py-2  rounded-md">
                  <option selected>Choose a Role</option>
                  <option value="US">Admin</option>
                  <option value="CA">Educator</option>
                  <option value="FR">Curriculum Developer</option>
                </select>
                
              </div>
              <div className="rounded-sm">
                <label className="block sm:text-xl text-base mb-2 font-heading">
                  Password
                </label>
                <input
                 
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