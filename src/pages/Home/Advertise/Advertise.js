import React from "react";
import { FaShippingFast } from "react-icons/fa";

const Advertise = () => {
  return (
    <section
      className="py-5"
      data-aos="fade-up"
      data-aos-offset="300"
      style={{ backgroundColor: "#79a206" }}
    >
      <div className="container mx-auto">
        <div className="text-white d-flex justify-content-center align-items-center gap-3">
          <FaShippingFast style={{ fontSize: "80px" }} />
          <p className="fw-bold fs-4">Free Delivery On Order Over $90.00</p>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
