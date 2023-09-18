import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import useAuth from '../MyHooks/useAuth';
import { useAppcontext } from '../Context/context/appContext';
function Login() {
  const { setLogin } = useAuth();
  axios.defaults.withCredentials = true;
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "Logged IN") {
      setLogin(true);
      navigate("/Dashboard", { replace: true });
    }
  }, []);


    const initialState = {
        name: "",
        Email: "",
        Password: "",
        RePassword: "",
        role : "0"
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
      
          if((values.name === "" && values.isMember === false) || values.email === "" || (values.password === "")){
            //   displayAlert("Please fill all the feilds", "error");
          }

          setupUser({Email : values.Email, Password : values.Password},  'login');
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                <div className="card-body">
                <form onSubmit={handleSubmit}> 
                        <div className="form-floating mb-3">
                            <input className="form-control" id="inputEmail" value={values.Email} 
                            name='Email'
                            type="email" placeholder="name@example.com" onChange={handleChange}/>
                            <label htmlFor="Email"className="form-label">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="inputPassword" value={values.Password} type="password" placeholder="Password"
                            name='Password' onChange={ handleChange}/>
                            <label htmlFor="Password"className="form-label">Password</label>
                        </div>
                       
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0"> 
                            <Link className="small" to="Register">Don't have an account?</Link>
                            <button type='Submit' className="btn btn-primary" >Login</button>  
                        </div>
                    </form>
                </div>
                
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="inputEmail"
                    value={Email}
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="Email" className="form-label">
                    Email address
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="inputPassword"
                    value={Password}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    id="inputRememberPassword"
                    type="checkbox"
                    value=""
                  />
                  <label
                    htmlFor="check"
                    className="form-check-label"
                    for="inputRememberPas1sword"
                  >
                    Remember Password
                  </label>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                  <Link className="small" to="Register">
                    Don't have an account?
                  </Link>
                  <button type="Submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Login;
