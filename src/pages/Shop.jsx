import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular";
import Offers from "../components/Offer/offers";
import NewCollections from "../components/NewCollections/newcollection";
import Newsletter from "../components/Newsletter/newsletter";

const Shop = ()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <Newsletter/>
        </div>
    )
}
export default Shop