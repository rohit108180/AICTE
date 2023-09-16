import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Register() {
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [Email,setEmail]=useState("")
    const [role,setRole]=useState("0")
    const [Password,setPassword]=useState("")
    const[Confirm,setConfirm]=useState("")
    const handleSubmit =async(e)=>{
        e.preventDefault();
        if(name == "" || role == "" || Email==""||Password==""||Confirm==""){
            alert("fill all the fields")
        }
        else if(Password!=Confirm){
            alert("passwords do not match")
        }
        else{

            const newUser = {name, role ,Email,Password}
            console.log(newUser);
        const response = await axios.post("http://localhost:4000/user/register",newUser)
        const data = await response.data
        if(data=="already exists"){
            alert("User with this email already exists")
        }
        else{
            navigate("/", { replace: true });
        
        }
    }
    setEmail('')
    setPassword('')
    setConfirm('')   
    }    

    return(
        
        <div className="container" >
        <div className="row justify-content-center">
            <div className="col-lg-7">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>

                        <div className="form-floating mb-3">
                                <input className="form-control" id="inputEmail" value={name} type="text" placeholder="" onChange={(e)=>setName(e.target.value)}/>
                                <label for="inputEmail">Name</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="inputEmail" value={Email} type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                                <label for="inputEmail">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                            <dis for="cars">Role : </dis>
                                <select name="role" id="inputRole" value={role} onChange={(e)=>setRole(e.target.value)}>
                                    
                                    <option value="0">Administartor</option>
                                    <option value="1">Curriculum designer</option>
                                    <option value="2">Educator</option>
                                </select>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-0">
                                        <input className="form-control" id="inputPassword"value={Password} type="password" placeholder="Create a password" onChange={(e)=>setPassword(e.target.value)} />
                                        <label for="inputPassword">Password</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-0">
                                        <input className="form-control" id="inputPasswordConfirm" value={Confirm} type="password" placeholder="Confirm password" onChange={(e)=>setConfirm(e.target.value)} />
                                        <label for="inputPasswordConfirm">Confirm Password</label>
                                    </div>
                                </div>

                                


                            </div>
                            <div className="mt-4 mb-0">
                            <div className="d-grid"> <button type='Submit' className="btn btn-primary btn-block" >Create Account</button>  
                            </div>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    </div>
    
    )

}