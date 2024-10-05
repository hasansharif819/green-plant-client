import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/plant-logo.png";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaFacebook,
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
                  Products
                </h6>
                <p>
                  <Link className="text-black">Chinese Evergreen</Link>
                </p>
                <p>
                  <Link className="text-black">English Ivy</Link>
                </p>
                <p>
                  <Link className="text-black">Parlor Palm</Link>
                </p>
                <p>
                  <Link className="text-black">Flowering Plants</Link>
                </p>
                <p>
                  <Link className="text-black">Bonsai</Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <Link className="text-black">Shipping</Link>
                </p>
                <p>
                  <Link className="text-black">Terms & Conditions</Link>
                </p>
                <p>
                  <Link className="text-black">Help</Link>
                </p>
                <p>
                  <Link className="text-black">My Account</Link>
                </p>
                <p>
                  <Link className="text-black">Order History</Link>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <FaMapMarkerAlt /> Thakurgaon, Dhaka, Bangladesh
                </p>
                <p>
                  <FaRegEnvelope /> greenplant@gmail.com
                </p>
                <p>
                  <FaPhoneAlt />+ 01 234 567 88
                </p>
                <p>
                  <FaPhoneAlt />+ 0234 567 880
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />
          <section className="p-3 pt-0 ">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  Copyright © 2023 Green Plant. All rights reserved
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <Link className=" m-2 text-black fs-5" role="button">
                  <FaFacebook />
                </Link>
                <Link className=" m-2 text-black fs-5" role="button">
                  <FaTwitter />
                </Link>
                <Link className=" m-2 text-black fs-5" role="button">
                  <FaGoogle />
                </Link>

                <Link className=" m-2 text-black fs-5" role="button">
                  <FaInstagram />
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
