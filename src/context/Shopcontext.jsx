import React, { createContext, useEffect, useState } from "react";


export const Shopcontext = createContext(null)
const getDefaultcart = ()=>{
    let cart = {}
    for( let index = 1; index< 300+1 ; index++){
         cart[index] = 0; 
    }
    return cart

}
const ShopcontextProvider = (props)=>{
    const [Allproducts, setAllproducts] = useState([])
    const [cartitems, setcartitems] = useState(getDefaultcart())
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((resp)=>resp.json())
        .then((data)=>setAllproducts(data))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'content-type': 'application/json'
                },
                body:""

            })
            .then((resp)=>resp.json())
            .then((data)=>setcartitems(data))
        }

    }, [])
   
    
    const Addtocart = (itemId)=>{
        setcartitems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((resp)=>resp.json())
            .then((data)=> console.log(data))

        }
       

    }
    const Removefromcart = (itemId)=>{
        setcartitems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token' : `${localStorage.getItem('auth-token')}`,
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((resp)=>resp.json())
            .then((data)=> console.log(data))

        }
        
        
       

    }
    const gettotalcartAmont = ()=>{
        let totalamount = 0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let cartinfo  = Allproducts.find((product)=> product.id === Number(item))
                totalamount += cartinfo.newprice * cartitems[item];
            }
        }
        return totalamount
    }

    const gettotalitems = ()=>{
        let totalitems = 0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                totalitems += cartitems[item];
               
            }
        }
        return totalitems
        
    }
    const contextvalue = {Allproducts, cartitems, Addtocart, Removefromcart, gettotalcartAmont, gettotalitems}
    
    return(
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )

}
export default ShopcontextProvider 
