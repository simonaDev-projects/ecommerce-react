import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart-icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

   const [menu, setMenu] = useState("shop");

   return (
      <header className='navbar'>
         <Link to='/'>
            <div className='nav-logo'>
               <img src={logo} alt="shop logo" />
               <p>e-SHOP</p>
            </div>
         </Link>


         <ul className='nav-menu'>
            <li onClick={() => { setMenu("shop") }}> <Link to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("mens") }}> <Link to='/mens'>Mens</Link> {menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("womens") }}> <Link to='/womens'>Womans</Link> {menu === "womens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("kids") }}> <Link to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
         </ul>

         <div className='nav-login-cart'>
            <Link to='/login'> <button>Login</button></Link>
            <Link to='/cart'> <img src={cart_icon} alt="cart icon" />
            </Link>
            <span>0</span>
         </div>
      </header>

   )
}

export default Navbar
