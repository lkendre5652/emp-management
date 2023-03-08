import React, { useState,useRef  } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Dashboard = () =>{
    const ref = useRef(false);
    const [rgData, setRgData] = useState({
        yourname: '',
        youremail: '',
        password: '',
        cfpassword: '',
        tc: '',       
    });
    const [valid,setValid] = useState(false);
    const regIOHandle = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setRgData( (oldItems)=>{
            return{...oldItems,[name] : value }
        })        

    }
    const isValid = (rgData) =>{
        const error = {};
        if(!rgData.yourname){
           error.yourname = "This field should not be blank!!";
           ref.current.focus();
        }
        if(!rgData.youremail){
            error.youremail = "This field should not be blank!!";
         }
         if(!rgData.password){
            error.password = "This field should not be blank!!";
         }
         if(!rgData.cfpassword){
            error.cfpassword = "This field should not be blank!!";
         }else if( rgData.password === rgData.cfpassword ){
            error.cfpassword = "Please check you confirm password!!";
         }
         if(!rgData.tc){
            error.tc = "This field should not be blank!!";
         }
         return error;

    }
    const rgIOSubmit = (e) =>{
        e.preventDefault();
        setValid(isValid(rgData));
        
    }   
    return(<>
    <section class="vh-100" style={{ 'background-color': '#eee'}}>
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ 'border-radius': '25px'}}>
                <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form class="mx-1 mx-md-4" method="post" onSubmit={rgIOSubmit} >

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input ref={ref} onChange={regIOHandle} type="text" name="yourname" id="form3Example1c" class="form-control" />
                            <label class="form-label" for="form3Example1c">Your Name</label>                            
                            </div>
                            <sub class="text-warning" >{valid.yourname}</sub>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input onChange={regIOHandle} name="youremail" type="text" id="form3Example3c" class="form-control" />
                            <label class="form-label"  for="form3Example3c">Your Email</label>
                            </div>
                            <sub class="text-warning" >{valid.youremail}</sub>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input onChange={regIOHandle} type="password" name="password" id="form3Example4c" class="form-control" />
                            <label class="form-label" for="form3Example4c">Password</label>
                            </div>
                            <sub class="text-warning" >{valid.password}</sub>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input onChange={regIOHandle} type="password" name="cfpassword" id="form3Example4cd" class="form-control" />
                            <label class="form-label" for="form3Example4cd">Repeat your password</label>
                            </div>
                            <sub class="text-warning" >{valid.cfpassword}</sub>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                            <input onChange={regIOHandle} class="form-check-input me-2" name="tc" type="checkbox" value="" id="form2Example3c" />
                            <label class="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                            <sub class="text-warning" >{valid.tc}</sub>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" name="registration" class="btn btn-primary btn-lg">Register</button>
                        </div>
                        </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>)
}