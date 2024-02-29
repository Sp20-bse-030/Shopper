import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import './LogIn.css'

const LogIn = () => {
    const navigate = useNavigate();
    const [userdetails, setuserdetails] = useState({
        email: "",
        password: ""
    })

    const userchangehandler = (e) => {
        setuserdetails({ ...userdetails, [e.target.name]: e.target.value })

    }
    const handlelogin = async () => {
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(userdetails)
        }).then((res)=>res.json()).then((data)=>{
            if(data.Message === "user not found"){
                toast.error("username or password is incorrect")
            }
            else{
                toast.success("successfully LoggedIn",{
                    onClose:()=> navigate('/')
                })
                
            }

        })
    }


    return (
        <div className="main">
            <div className="maincontainer">

                <h1>LogIn</h1>
                <div className="feilds">
                    
                    <input value={userdetails.email} onChange={userchangehandler} type="email" name="email" placeholder="Enter Your Email" />
                    <input value={userdetails.password} onChange={userchangehandler} type="password" name="password" placeholder="Enter Your Password" />
                </div>

                <button onClick={handlelogin}>Login</button>
                <p>If you forgot password <span>Click here</span></p>

                
            </div>
            <ToastContainer/>
        </div>
    )

}
export default LogIn