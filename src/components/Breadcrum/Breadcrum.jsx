import React from "react";
import './Breadcrum.css'
import arow from '../Assets/arow.png'


const Breadcrum = (props)=>{
    const {product} = props
    return(
        <div className="braedcrum">
            HOME <img src={arow} alt=""/> SHOP <img src={arow} alt=""/> {product.category} <img src={arow} alt=""/> {product.name}

        </div>
    )
}
export default Breadcrum