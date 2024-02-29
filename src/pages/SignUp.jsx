import React, { useState } from "react";
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

const Signup = () => {
    const [state, setstate] = useState("Login")
    const navigate = useNavigate();
    const [signupuserdetails, setsignupuserdetails] = useState({
        name: "",
        email: "",
        password: ""
    })
   

    const signupuserchangehandler = (e) => {
        
        setsignupuserdetails({ ...signupuserdetails, [e.target.name]: e.target.value })

    }
    const handlesignup = async () => {
        let responsedata;
        await fetch('http://localhost:4000/signup', {
            
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(signupuserdetails)
        }).then((res)=>res.json()).then((data)=> responsedata=data)
            if(responsedata.success){
                localStorage.setItem('auth-token', responsedata.token)
                toast.success("successfully registered",{
                    onClose: ()=> navigate('/')
                })
               

            }
            else if(responsedata.Message == "all feilds required"){
                toast.error("All feilds required")
            }
            else if(responsedata.Message == "User Already Exist"){
                toast.error("This email already exist")
            }
            

        
    }
    const handlelogin = async () => {
        let responsedata;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(signupuserdetails)
        }).then((res)=>res.json()).then((data)=>responsedata = data)
            if(responsedata.Message === "user not found"){
                toast.error("username or password is incorrect")
            }
            else{
                localStorage.setItem('auth-token', responsedata.token)
                toast.success("successfully LoggedIn",{
                    onClose:()=> navigate('/')
                })
   
            }
        
    }


    return (
        <div className="main">
            <div className="maincontainer">

                <h1>{state}</h1>
                <div className="feilds">
                    {state === 'Signup'?<input value={signupuserdetails.name} onChange={signupuserchangehandler} type="text" name="name" placeholder="Enter Your Name" />: <></>}
                    <input value={signupuserdetails.email} onChange={signupuserchangehandler} type="email" name="email" placeholder="Enter Your Email" />
                    <input value={signupuserdetails.password} onChange={signupuserchangehandler} type="password" name="password" placeholder="Enter Your Password" />
                </div>

                {state ==="Signup"?<button  onClick={handlesignup}>Continue</button>: <button  onClick={handlelogin}>Continue</button> }
                {state === 'Signup'?<p>Already have an account <span onClick={()=>{setstate("login")}} >LogIn Here</span></p>:
                <p>Dont have account<span onClick={()=>{setstate("Signup")}}>Signup Here</span></p>}
                

                <div className="checkbox">
                    <input type="checkbox" />
                    <p>Agree to all terms and conditions</p>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )

}
export default Signup