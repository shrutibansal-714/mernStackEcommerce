import React, { useState } from "react";
import "./Header.css";
import {
  AiOutlineSearch,
} from "react-icons/ai";
import {
  BiCart
} from "react-icons/bi";
import {
  CgProfile
} from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../images/logo.png"

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          
          <img src={logo} alt="Ecommerce" />
         
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>


            
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
            <Link to="/search">
              <AiOutlineSearch/>
            </Link>
            </li>
            <li>
            <Link to="/cart">
              <BiCart/>
            </Link>
            </li>
            <li>
            <Link to="/login">
              <CgProfile/>
            </Link>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;