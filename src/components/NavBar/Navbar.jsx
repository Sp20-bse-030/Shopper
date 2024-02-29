import React, { useContext, useRef, useState }  from 'react'
import './Navbar.css'
import dropdown from '../Assets/dropdown.png'
import logo from '../Assets/Shopping.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../context/Shopcontext'
import {useNavigate} from 'react-router-dom'

const Navbar = ()=>{
    const navigate = useNavigate();
    const [menu, setmenu] = useState("Shop")
    const {gettotalitems} = useContext(Shopcontext)
    const menuref = useRef()


    const dropdowntoggle = (e)=>{
        menuref.current.classList.toggle('navmenuvisible')
        e.target.classList.toggle('open')
    }

    return(
        <div className='Navbar'>
            <div className='logo'>
            <img  src={logo} alt=''/>
            <p>Shopper</p> 
            </div>
            <img className='dropdown' onClick={dropdowntoggle}src={dropdown} alt=''/>
            <ul ref = {menuref} className='listitems'>
                <li onClick={()=>{setmenu("Shop")}}><Link style={{textDecoration:'none'}} to = '/'>Shop</Link>{menu==="Shop" ?<hr/>:<></>} </li>
                <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration:'none'}} to = '/Men'>Men</Link> {menu==="Men" ?<hr/>:<></>} </li>
                <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration:'none'}} to = '/women'>Women</Link> {menu==="Women" ?<hr/>:<></>} </li>
                <li onClick={()=>{setmenu("Kid")}}><Link style={{textDecoration:'none'}} to = '/kid'>Kids</Link> {menu==="Kid" ?<hr/>:<></>} </li>
            </ul>
            <div className='Loginbutton'>
                {localStorage.getItem('auth-token')?
                <button onClick={()=>{localStorage.removeItem('auth-token'); navigate('/')}}>Logout</button>:
                <Link to = '/signup'><button>LogIn</button></Link>}
            
               <Link to = 'Cart'> <img src={cart} alt=''/></Link> 
                <div className='cartcounter'>
                { gettotalitems()}

                </div>
            </div>
        </div>

    )
}
export default Navbar
