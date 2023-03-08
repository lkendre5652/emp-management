import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";

export const Login = () =>{ 
    const navigate = useNavigate();
    const [lgData,setLgData] = useState({
        username: '',
        pass: '',
    });
    const [valid, setValid] = useState(false);

    const loginIOHandle = (e) =>{
        setLgData( (oldItems)=>{
            return {...oldItems, [e.target.name] : e.target.value }
        })
    }
    const isValid = (lgData) =>{
        const error = {};
        if(!lgData.username){
            error.username = "This field should not be blank!!";
        }
        if(!lgData.pass){
            error.pass = "This field should not be blank!!";
        }        

        return error;
        
    }

    const loginSBMTHandle = async(e) =>{
        e.preventDefault();        
        setValid(isValid(lgData));            
        try{
            const resp = await axios.put(`http://localhost/user/getdata.php`, lgData);            
            if(resp.status !== "error"){                    
                localStorage.setItem(resp.data.username);                
                //navigate("/dashboard");  
                alert(0)                
                             
            }else{                
                setLgData(resp.data);
            }   
        }catch(error){
            console.log("Try again!!");
        }             
        
    }

    return(<>
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{ 'border-radius': '1rem' }}>
                    <div className="card-body p-5 text-center">

                        <div className="mb-md-5 mt-md-4 pb-5">

                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                        <form method="post" onSubmit={loginSBMTHandle} >
                            <div className="form-outline form-white mb-4">
                                <input onChange={loginIOHandle} type="text" name="username" id="username" className="form-control form-control-lg" maxLength={20} />
                                <label className="form-label" for="username">User Name</label>
                                <sub className="text-danger"> {valid.username}</sub>
                            </div>                            

                            <div className="form-outline form-white mb-4">
                                <input onChange={loginIOHandle} type="password" name="pass" id="pass" className="form-control form-control-lg" maxLength={20} />
                                <label className="form-label" for="pass">Password</label>
                                <sub className="text-danger">{valid.pass}</sub>
                            </div>
                            

                            {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                            <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                        </form>

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div>

                        </div>

                        <div>
                        <p className="mb-0">Don't have an account? <NavLink className="text-white-50 fw-bold">Sign Up</NavLink>
                        </p>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>    
    </>)
}