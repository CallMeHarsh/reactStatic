import React from "react";
import { Link } from "react-router-dom";
import smokeLogo1 from "../assets/smokeLogo1.png";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-light">
        <div className="container my-2">
            <Link to="/" className="navbar-brand text-dark font-weight-bold">
            <span><img src={smokeLogo1} width="50" height="30" alt="" loading="lazy" /></span> Home
                </Link>
                <Link to="/contact" className="ml-auto mx-3">
                    <button className="btn btn-outline-info ml-auto mx-3">
                        Contact me
                    </button>
                </Link>
                
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#collapseNav">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                    <div className="navbar-nav">
                    <a href="#project" className="nav-item nav-link text-dark 
                        h6 mx-1 my-auto">Projects</a>
                        <a href="#blog" className="nav-item nav-link text-dark 
                        h6 mx-1 my-auto">Blogs</a>
                    </div>
                </div>
        </div>
    </nav>
    )
}

export default Navbar;