import React, { useContext } from "react";
import './Cartitem.css';
import deleteicon from '../Assets/delete.png';
import { Shopcontext } from "../../context/Shopcontext";
const Cartitems = () => {
    const { Allproducts, cartitems, Removefromcart, gettotalcartAmont } = useContext(Shopcontext);
    return (
        <div className="Cartitemformat">
            <div className="maincartformat">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {Allproducts.map((e) => {
                if (cartitems[e.id] > 0) {
                    return (
                        <div>
                            <div className="actulitems">
                                <img className="itemimage" src={e.img} alt="" />
                                <p>{e.name}</p>
                                <p>${e.newprice}</p>
                                <button>{cartitems[e.id]}</button>
                                <p>${e.newprice * cartitems[e.id]}</p>
                                <img className="removeicon" src={deleteicon} alt="" onClick={() => { Removefromcart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="carttotal">
                <div className="carttotaldata">
                <h1>Cart Totals</h1>
                    <div className="carttotalitems">
                    <p>Subtotals</p>
                    <p>${gettotalcartAmont()}</p>
                    </div>
                    <hr/>
                    <div className="carttotalitems">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                    </div>
                    <hr/>
                    <div className="carttotalitems">
                    <p>Totals</p>
                    <p>${gettotalcartAmont()}</p>
                    </div>
                    <hr/>
                    <button>Proceed to checkout</button>
                    </div>
                    
                
                <div className="promocode"> 
                    <p>If you have any promo so please anter here</p>
                    <input placeholder="Promo code"/>
                    <button>Submit</button>
                </div>

            </div>

        </div>
    )
}
export default Cartitems