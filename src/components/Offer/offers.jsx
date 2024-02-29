import React from "react";
import './offers.css'
import Modelimage from '../Assets/modelimage.png'
 
const Offers = ()=>{
    return(
        <div className="Offer">
            
            <div className="left">
            
            <h2>Exclusive</h2>
            <h2>Offers for You</h2>
            <p>Only on Best seller products</p>
            <button>Check Now</button>
            </div>
            <div className="right">
                <img src={Modelimage}/>


            
            </div>
        </div>
    )
}
export default Offers