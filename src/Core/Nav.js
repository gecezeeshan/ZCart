import React from 'react'
import {  NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import CartCount from '../ShoppingCart/Cart/CartCount';
function Nav(props) {


  let activeStyle = {
    textDecoration: "underline",
  };


let signOut = () => {
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //   console.log('User signed out.');
    // });
  }


  return (
    <>
   
   <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="414875063153-7eol3pr9pgce6kj3plkr3b5elo2cau3k.apps.googleusercontent.com"></meta>
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
        <li>
        <a href="#" click="signOut();">Sign out</a>


        </li>
</ul>
     </nav>

    </>

  )
}

export default Nav;
