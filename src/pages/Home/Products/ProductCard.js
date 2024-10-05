import React from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Product.css'

const ProductCard = ({ product }) => {
  const { _id, img, name, discount_price, price } = product;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 product-card">
      <div className="card border-0 position-relative overflow-hidden product-card-hover">
        {/* Image section */}
        <Link to={`/product/${_id}`}>
          <img
            src={img}
            height={300}
            className="card-img-top product-card-img"
            alt="Plant"
          />
        </Link>

        {/* Details that appear on hover */}
        <div className="card-body product-details text-white">
          <h5 className="card-title h4 text-center">{name}</h5>
          <div className="d-flex gap-3 justify-content-center align-items-center">
            <p className="card-text h4">${parseFloat(discount_price).toFixed(2)}</p>
            <p className="card-text text-decoration-line-through">
              ${parseFloat(price).toFixed(2)}
            </p>
          </div>
          <div className="d-flex mt-lg-2 gap-2 justify-content-center">
            <Link to={`/product/${_id}`}>
              <button className="btn btn-green-black">Details</button>
            </Link>
          </div>
        </div>

        {/* Floating icons */}
        <div
          className="position-absolute icon-group"
          style={{ top: "10px", right: "5px" }}
        >
          <div className="d-flex justify-content-center align-items-center gap-2 ">
            <Link
              className="p-2 rounded-circle text-white"
              style={{ backgroundColor: "#78a2068b" }}
            >
              <FaShoppingCart className="fs-4" />
            </Link>
            <Link
              className="p-2 rounded-circle text-white"
              style={{ backgroundColor: "#78a2068b" }}
            >
              <FaRegHeart className="fs-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
