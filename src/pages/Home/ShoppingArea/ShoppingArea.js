import React from "react";
import { FaShippingFast, FaCreditCard, FaAddressCard } from "react-icons/fa";

const ShoppingArea = () => {
  const services = [
    {
      icon: <FaShippingFast />,
      title: "Free Delivery",
      describe: "Free shipping around the world for all orders over $120",
    },
    {
      icon: <FaCreditCard />,
      title: "Safe Payment",
      describe: "With our payment gateway, don’t worry about your information",
    },
    {
      icon: <FaAddressCard />,
      title: "Friendly Services",
      describe: "You have 30-day return guarantee for every single order",
    },
  ];
  return (
    <section
      className="mb-5 py-3"
      data-aos="fade-up"
      style={{ backgroundColor: "#e0f2da" }}
    >
      <div className="container">
        <div className="row">
          {services.map((service, id) => (
            <div key={id} className="col-sm-12 col-md-6 col-lg-4 mt-2 mt-lg-0">
              <div>
                <p
                  className="color-green text-center"
                  style={{ fontSize: "60px" }}
                >
                  {service.icon}
                </p>
                <div className="text-center">
                  <h4 className="font-semibold">{service.title}</h4>
                  <p className="fs-5">{service.describe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoppingArea;
