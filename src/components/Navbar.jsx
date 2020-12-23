import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/teamwork.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light ms-3" href="#0">
                    <img src={logo} alt="logo" style={{ width: "35px" }} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active text-uppercase text-light me-5"
                                aria-current="page"
                                href="#0"
                            >
                                {" "}
                                <span>
                                    <i className="fas fa-home me-2" />
                                </span>
                Home
              </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase text-light me-5" href="#0">
                                News
              </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase text-light me-5" href="#0">
                                Contact Us
              </a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-light" type="submit">
                            Search
            </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
