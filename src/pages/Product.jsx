import React from "react";
import { useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/Descriptionbox";
import Relatedproducts from "../components/Relatedprducts/Relatedproducts";

const Product =()=>{
    const {Allproducts} = useContext(Shopcontext)
    const {productId} = useParams()
    const product = Allproducts.find((e)=> e.id === Number(productId))
     return(
        <div>
            <Breadcrum product = {product} />
            <ProductDisplay product = {product}/>
            <DescriptionBox/>
            <Relatedproducts/>

        </div>
    )
}
export default Product