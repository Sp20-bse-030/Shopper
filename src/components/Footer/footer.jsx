import React from "react";
import './footer.css'
import logo from '../Assets/Shopping.png'
import facebook from '../Assets/facebook.png'
import insta from '../Assets/instagram.jpg'
import whatsapp from '../Assets/whatsapp.jpg'
import pin from '../Assets/pintrest.png'

const Footer =()=>{
    return(
        <div className="footer">
            <div className="logo">
                <img src={logo} alt=""/>
                <h1>SHOPPER</h1>
            </div>
            <div className="footerlist">
                <ul>
                    <li>Company</li>
                    <li>Offices</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="social">
                <img src={facebook} alt=""/>
                <img src={insta} alt=""/>
                <img src={pin} alt=""/>
                <img src={whatsapp} alt=""/>
                

            </div>

            <div className="copyright">
                <hr/>
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>


        </div>
    )
}
export default Footer