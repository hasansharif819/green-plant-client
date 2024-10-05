import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/plant-logo.png";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaGoogle,
  FaTwitter,
  FaFacebook,
  FaGlobe
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="300"
      style={{ backgroundColor: "#e0f2da" }}
    >
      <footer className="container  text-center text-lg-start">
        <div className="container py-5 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
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
                <h5 className="mt-2">
                  Get in touch with us for the best quality Plants & Planters
                </h5>
                <p>
                  At Green Plant, we are on a mission to bring the beauty of
                  nature to your indoors and create more relaxing , attractive
                  and productive places to live and work.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Menu
                </h6>
                <p>
                  <Link to='/products' className="text-black text-decoration-none">Products</Link>
                </p>
                <p>
                  <Link to='/about' className="text-black text-decoration-none">About</Link>
                </p>
                <p>
                  <Link to='/contact' className="text-black text-decoration-none">Contact</Link>
                </p>
                <p>
                  <Link to='/blogs' className="text-black text-decoration-none">Blogs</Link>
                </p>
                <p>
                  <Link to='/' className="text-black text-decoration-none">Home</Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <Link className="text-black text-decoration-none">Shipping</Link>
                </p>
                <p>
                  <Link className="text-black text-decoration-none">Terms & Conditions</Link>
                </p>
                <p>
                  <Link className="text-black text-decoration-none">Help</Link>
                </p>
                <p>
                  <Link className="text-black text-decoration-none">My Account</Link>
                </p>
                <p>
                  <Link className="text-black text-decoration-none">Order History</Link>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <FaMapMarkerAlt /> Uttara, Dhaka
                </p>
                <p>
                  <FaRegEnvelope /> hs.sharif819@gmail.com
                </p>
                <p>
                  <FaPhoneAlt /> +8801640911511
                </p>
                <Link className="text-black text-decoration-none" to={"https://sharifs-portfolio.vercel.app/"} >
                  <FaGlobe /> Sharif Hasan
                </Link>
              </div>
            </div>
          </section>

          <hr className="my-3" />
          <section className="p-3 pt-0 ">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  Copyright © 2024 Green Plant. All rights reserved
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <Link to={"https://www.facebook.com/profile.php?id=100012993934707"} className=" m-2 text-black fs-5" role="button">
                  <FaFacebook />
                </Link>
                <Link className=" m-2 text-black fs-5" role="button">
                  <FaTwitter />
                </Link>
                <Link className=" m-2 text-black fs-5" role="button">
                  <FaGoogle />
                </Link>

                <Link to={"https://sharifs-portfolio.vercel.app/"} className=" m-2 text-black fs-5" role="button">
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
