import React from "react";
import './Hero.css'
import img4 from '../Assets/image4.png'
import shirt from '../Assets/Shirt.jpg'
import arrow from '../Assets/arrow.png'
import model from '../Assets/Model.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="Left">
                <h2>NEW ARRIVALS ONLY </h2>
                <div className="New">
                    <div className="NewandImage">
                    <p>new</p>
                    <img src={img4} alt="" />
                    </div>
                    <p>Collectins</p>
                    <p>For Everyone</p>
                </div>
                <div className="latestbutton">
                    <div>Latest collection </div>
                    <img src={arrow} alt=""/>
                    
                </div>


            </div>
            <div className="Right">
                <img src={model} alt="" />


            </div>
        </div>
    )
}
export default Hero