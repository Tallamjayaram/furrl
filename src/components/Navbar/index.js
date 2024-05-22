import React from 'react';
import { BsLock } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import './index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">#Vibe Page</div>
      <div className="navbar-links">
        <a href="https://furrl.in/wishlist" className="wishlist-btn"><BiSave/></a>
        <a href="https://furrl.in/cart" className="cart-btn"><BsLock/></a>
      </div>
    </nav>
  );
}

export default Navbar;
