import React from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { _id, image, name, discount_price, price } = product;
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 product-card position-relative">
        <div className="card border border-2 card-hover">
          <Link to={`/product/${_id}`}>
            <img
              src={image}
              className="card-img-top product-card-img"
              alt="Plant"
            />
          </Link>

          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <p className="card-text h4">
                ${parseFloat(discount_price).toFixed(2)}
              </p>
              <p className="card-text text-decoration-line-through">
                ${parseFloat(price).toFixed(2)}
              </p>
            </div>
            <div className="d-flex mt-lg-2 gap-2 justify-content-center">
              <Link>
                <button className="btn btn-green-black">Buy It Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="position-absolute px-2"
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
    </>
  );
};

export default ProductCard;
