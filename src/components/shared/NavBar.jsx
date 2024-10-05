import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/plant-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to="/" className="navbar-brand  fw-bold fs-2">
          <img
            src={logo}
            alt="Plant"
            className="img-fluid"
            style={{ width: "60px" }}
          />
          Green
          <span className="color-green">Plant</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active fw-semibold"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link fw-semibold">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link fw-semibold">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link fw-semibold">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link fw-semibold">
                Blog
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 search-field"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-green-black" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
