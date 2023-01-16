import { React, useState } from "react";
import ReactDOM from "react-dom";
import Logo from "../assets/logo.jpeg";

const Auth = () => {
  const [authText, setAuthText] = useState("Login");
  return (
    <button
      className="auth"
      onClick={() => {
        authText == "Login" ? setAuthText("Logout") : setAuthText("Login");
      }}
    >
      {authText}
    </button>
  );
};

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={Logo} />
      </a>
      <ul className="navigation">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <Auth />
    </div>
  );
};

export default Header;
