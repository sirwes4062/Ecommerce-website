import React, { useContext } from "react";
import Logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/Shopcontext";
import { responsiveContetxt } from "../../context/responsive";

const Navbar = () => {
  const {mediaWidth} = useContext(responsiveContetxt)
  // const [menusIsDisplayed, setIsDisplayed] = useState(false)
  console.log(mediaWidth);

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className = {`navbar w-screen`}>
      <div className={'navlogo'}>
        <img src={Logo} alt="" />
        <p>SHOPPER</p>
      </div>
      {
        mediaWidth <= 900 ? null :
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women" style={{ textDecoration: "none" }}>
            {" "}
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      }

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          {" "}
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;