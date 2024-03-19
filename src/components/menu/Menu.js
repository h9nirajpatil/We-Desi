// Filename - components/Home.js

import React from "react";
import divider from "../../assets/images/divider-free-img-1.png";
import "./menu.css";
import panipuri from "../../assets/MenuImg/panipuri.webp";
import Tikki from "../../assets/MenuImg/tikkeshikke.avif";
import vadapav from "../../assets/MenuImg/padapav.jpg";
import chinese from "../../assets/MenuImg/Noodles.jpg";
import dosa from "../../assets/MenuImg/dosa.jpg";
import curry from "../../assets/MenuImg/curries.jpg";
import parata from "../../assets/MenuImg/parathanan.jpg";
import combo from "../../assets/MenuImg/wedeso combo.jpg";
import rice from "../../assets/MenuImg/rice.jpg";
import softdrink from "../../assets/MenuImg/milkShake.jpg";
import dessert from "../../assets/MenuImg/dessert.jpg";
import kidsspecial from "../../assets/MenuImg/kidsspecial.jpg";
import salad from "../../assets/MenuImg/salad.jpg";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      {/* About Us Head starts*/}
      <div id="Top" className="Item-head">
        <div className="Item-img">
          <div className="Item-content">
            <img
              style={{ width: "300px", marginLeft: "30vh" }}
              className="abt-img"
              src={divider}
              alt="divider-img"
            ></img>
            <p
              className="animate-text-know"
              style={{
                color: "white",
                fontSize: "6rem",
                fontWeight: "700",
                margin: "20px 0px ",
              }}
            >
              We-Desi
            </p>
            <p
              className="animate-text-about"
              style={{
                color: "white",
                fontSize: "8rem",
                fontWeight: "700",
                margin: "-20px 0px ",
                marginRight: "20px",
              }}
            >
              Special Menu
            </p>
            <p className="itemdiamond-square"></p>
          </div>
        </div>
      </div>
      {/* About Us Head ends*/}

      {/* Menu Items Cards Starts */}
      <div style={{ padding: "15px 50px" }} className="grid-container">
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Chatpata Chats</p>
            <img className="blackshadow" src={panipuri} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Tikke Shikke</p>
            <img src={Tikki} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Burger and Rolls</p>
            <img src={vadapav} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Indo chinese</p>
            <img src={chinese} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">South Indian</p>
            <img src={dosa} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Desi Curries</p>
            <img src={curry} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Prantha and Naan</p>
            <img src={parata} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">WeDesi Combo</p>
            <img src={combo} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Masala Rice</p>
            <img src={rice} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Cold Drinks</p>
            <img src={softdrink} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Indian Desserts</p>
            <img src={dessert} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Kids Special</p>
            <img src={kidsspecial} alt="menuimage"></img>
          </div>
        </NavLink>
        <NavLink to="/menucard" activeClassName="active">
          <div className="grid-item">
            <p className="image-text">Sides ans Slaw</p>
            <img src={salad} alt="menuimage"></img>
          </div>
        </NavLink>
      </div>
      {/* Menu Items Cards Starts */}
    </div>
  );
};

export default Menu;
