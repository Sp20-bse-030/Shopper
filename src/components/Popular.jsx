import React, { useEffect, useState } from "react";
import Item from '../components/Items/item'
import './Popular.css'

const Popular = ()=>{

    const [data, setdata] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:4000/populerinwomen')
        .then((resp)=>resp.json())
        .then((data)=> setdata(data))

    }, [])

    return(
    <div className="popular">
       
            <h1>Popular in women</h1>
            <hr/>
        <div className="popularitems">
        
        {data.map((item, i)=>{
            return <Item key = {i} id={item.id} name = {item.name} description = {item.description} image={item.img} oldprice = {item.oldprice} newprice = {item.newprice} />
        })}
        </div>
    </div>
    )


}
export default Popular