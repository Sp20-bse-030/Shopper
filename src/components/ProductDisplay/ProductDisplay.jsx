import React, { useContext } from "react";
import './ProductDisplay.css'
import fill from '../Assets/fill.png'
import { Shopcontext } from "../../context/Shopcontext";

const ProductDisplay = (props) => {
    const { product } = props
    const {Addtocart} = useContext(Shopcontext)
    return (
        <div className="productdisplay">
            <div className="Leftdisplay">
                <div className="imagelist">
                    <img className="first" src={product.img} alt="" />
                    <img className="second" src={product.img} alt="" />
                    <img className="third" src={product.img} alt="" />
                    <img className="fourth" src={product.img} alt="" />
                </div>
                <div className="oneimage">
                    <img src={product.img} alt="" />

                </div>
               
            </div>
            <div className="Rightdisplay">
                <h1>{product.name}</h1>
            <div className="rating">
                    <img src={fill} alt="" />
                    <img src={fill} alt="" />
                    <img src={fill} alt="" />
                    <img src={fill} alt="" />
                    <img src={fill} alt="" />
                </div>
                <div className="price">
                    <p className="oldprice">${product.oldprice}</p>
                    <p>${product.newprice}</p>

                </div>
                <div className="description">
                    <p>{product.description}</p>

                </div>
                <div><h1>Select Size</h1></div>
                <div className="size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XLL</div>
                    
                </div>
                <button onClick={()=> {Addtocart(product.id)}}>Add to Cart</button>

            </div>

        </div>
    )
}
export default ProductDisplay