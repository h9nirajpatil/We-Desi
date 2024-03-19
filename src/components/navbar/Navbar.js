import React from 'react';
import logo from '../../assets/images/desi-app.png'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black p-2" style={{ zIndex: 11 }}>
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand p-2" href="#">
                    <img src={logo} alt="Logo" width="150" height="155" /> {/* Adjust width and height as needed */}
                </a>

                {/* Toggle button for mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Empty space for alignment */}
                    </ul>

                    {/* Seven buttons on the right */}
                    <div class='d-flex flex-column gap-4'>
                        {/* Two buttons on the top right */}
                        {/* <div className="d-flex">
                            <button className="btn btn-outline-light me-2 border-0">ER</button>
                            <button className="btn btn-outline-light border-0">EN</button>
                        </div> */}
                        <div className='mr-5'>
                            <ul className="navbar-nav gap-4">
                                <NavLink
                                    to="/"
                                    className="nav-item"
                                    activeClassName="active"
                                >
                                    <a className="nav-link nav-links1" href="#">Home</a>
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="nav-item"
                                    activeClassName="active"
                                >
                                    <a className="nav-link nav-links2" href="#">About Us</a>
                                </NavLink>
                                {/* <li className="nav-item">
                                    <a className="nav-link nav-links2" href="#">About Us</a>
                                </li> */}
                                <NavLink
                                    to="/gallary"
                                    className="nav-item"
                                    activeClassName="active"
                                >
                                    <a className="nav-link nav-links3" href="#">Gallery</a>
                                </NavLink>
                                <NavLink
                                    to="/menu"
                                    className="nav-item"
                                    activeClassName="active"
                                >
                                    <a className="nav-link nav-links4" href="#">Menu</a>
                                </NavLink>
                                <NavLink
                                    to="/sweets"
                                    className="nav-item"
                                    activeClassName="active"
                                >
                                    <a className="nav-link nav-links5" href="#">Sweets</a>
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="nav-item"
                                    activeClassName="active"
                                >
                                    <a className="nav-link nav-links6" href="#">Contact Us</a>
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="nav-item"
                                    activeClassName="active"
                                >
                                    <button className="nav-item reservation">
                                        Reservation
                                    </button>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;