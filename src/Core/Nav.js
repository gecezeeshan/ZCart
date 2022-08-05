import React from 'react'
import {  NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import CartCount from '../ShoppingCart/Cart/CartCount';
function Nav(props) {


  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
   
    <nav className={classes.nav}>
<ul>
<li>
          <NavLink
            to="/home"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Cart &nbsp;
            <CartCount></CartCount>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/abouts"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About Us
          </NavLink>
        </li>
</ul>
     </nav>

    </>

  )
}

export default Nav;
