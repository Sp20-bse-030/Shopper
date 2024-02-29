import React from "react";
import './newsletter.css'

const Newsletter = ()=>{
    return(
        <div className="newsletter">
            <h1>Get Exclusive offers on your email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="newsletterbutton">
                <input type="email" placeholder="enter your email"/>
                <button>Subscribe</button>
            </div>

        </div>
    )
}
export default Newsletter