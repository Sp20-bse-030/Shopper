import React from "react";
import './Relatedproducts.css'
import data from '../Assets/data'
import Item from '../Items/item'

const Relatedproducts = ()=>{
    return(
        <div className="Relatedproducts">
            <h1>Relaed Products</h1>
            <hr/>
            <div className="RelatedItems">
                {data.map((item,i)=>{
                    return <Item key = {i} id = {item.id} image = {item.image} name = {item.name} oldprice = {item.oldprice} newprice = {item.newprice}/>
                })}
            </div>

        </div>
    )
}
export default Relatedproducts