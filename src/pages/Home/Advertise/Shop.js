import React from "react";
import bg from "../../../assets/advertise/bg-shop.jpg";
import bg2 from "../../../assets/advertise/bg-shop2.jpg";
const Shop = () => {
  return (
    <section
      className="container mx-auto"
      data-aos="fade-up"
      data-aos-offset="300"
    >
      <div className="row">
        <div className="col-sm-12 col-lg-6 py-5">
          <div
            className="p-3 p-md-5"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              maxHeight: "270px",
            }}
          >
            <h5 className="color-green">Top Staff Pick</h5>
            <h4 className="h2">Shop Cactus</h4>
            <p>
              Proin interdum magna primis <br /> id consequat dictum
            </p>
            <button
              className="btn btn-green-black"
              style={{ backgroundColor: "#79a206" }}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 py-5">
          <div
            className="p-3 p-md-5"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              maxHeight: "270px",
            }}
          >
            <h4 className="h2">
              Indoor Life <br /> Plants
            </h4>
            <p>
              Use code: TEAMO Get 25% Off <br /> for all Accessories items!
            </p>
            <button className="btn btn-green-black">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
