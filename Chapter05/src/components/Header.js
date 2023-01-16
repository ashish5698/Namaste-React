import React from "react";
import ReactDOM from "react-dom";
import Logo from "../assets/logo.jpeg"

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={Logo}/>
      </a>
      <ul className="navigation">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button className="auth">
        Login
      </button>
    </div>
  );
};

export default Header;
