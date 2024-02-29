import React, { useEffect, useState } from "react";
import './newcollection.css'

import Item from '../Items/item'
const NewCollections = ()=>{
    const [newcollectiondata, setnewcollectiondata] = useState([]);

    useEffect(()=>{
        
        fetch('http://localhost:4000/newcollection')
        .then((resp)=>resp.json())
        .then((data)=> setnewcollectiondata(data))

    }, [])


    return(
        <div className="newcollection">
            <h1>New Collections</h1>
            <hr/>
            <div className="newcollectionitems">
                {newcollectiondata.map((item, i)=>{
                    return <Item key = {i} id = {item.id} name = {item.name} image = {item.img} oldprice = {item.oldprice} newprice = {item.newprice}/>

                })}
            </div>
            
        </div>
    )
}
export default NewCollections