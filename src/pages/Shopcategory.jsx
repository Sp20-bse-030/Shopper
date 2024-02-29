import React, { useContext } from "react";
import './CSS/Shopcategory.css'
import { Shopcontext } from "../context/Shopcontext";
import Item from "../components/Items/item";


const Shopcategory = (props)=>{
    const {Allproducts} = useContext(Shopcontext)
    return(
        <div className="Shopcategory">
            <div className="banner">
            <img src={props.banner} alt=""/>
            </div>
            <div className="categoryitems">
                {Allproducts.map((item, i)=>{
                    if(props.category === item.category){
                        return <Item key = {i} id={item.id} name = {item.name} description = {item.description} image={item.img} oldprice = {item.oldprice} newprice = {item.newprice} />

                    }
                    else{
                    return null
                    }

                })}
            </div>

        </div>
    )
}
export default Shopcategory