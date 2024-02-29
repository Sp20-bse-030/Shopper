import React from "react";
import './item.css'
import { Link } from "react-router-dom";
const Item = (props)=>{
    return(
        <div className="items">
           <Link to = {`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image}/></Link>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div className="price">
                <div className="newprice">
                    <p>${props.newprice}</p>

                </div>
                <div className="oldprice">
                    <p >${props.oldprice}</p>

                </div>
            </div>
            
        </div>
    )

}
export default Item