import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const product = useLoaderData();
  const { image, name, price, discount_price, rating } = product;
  const [quantity, setQuantity] = useState(1);

  let position;
  if (Number.isInteger(rating)) {
    position = "65px";
  } else {
    position = "75px";
  }

  console.log(Number.isInteger(rating));

  return (
    <section>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <PhotoProvider>
              <PhotoView src={image}>
                <img
                  src={image}
                  className="img-fluid w-100"
                  alt="Plant"
                  style={{ objectFit: "cover" }}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="py-2">
              <h4>{name}</h4>
              <div className="position-relative">
                <p className="fs-6"> Rating: {rating}</p>
                <FaStar
                  className="position-absolute text-warning"
                  style={{ top: "-2px", left: `${position}` }}
                />
              </div>
              <div className="d-flex gap-3 align-items-center my-2">
                <p className="card-text fs-4 fw-bold mb-0">
                  <span>Price: </span>${parseFloat(discount_price).toFixed(2)}
                </p>
                <p className="card-text fs-5 text-decoration-line-through">
                  ${parseFloat(price).toFixed(2)}
                </p>
              </div>

              <p>
                Availability: <span className="fw-semibold">10 In Stock</span>
              </p>

              <p>
                The EcoSmart Fleece Hoodie full-zip hooded jacket provides
                medium weight fleece comfort all year around. Feel better in
                this sweatshirt because Hanes keeps plastic bottles of landfills
                by using recycled polyester.7.8 ounce fleece sweatshirt made
                with up to 5 percent polyester created from recycled plastic.
              </p>
              <div className="my-3">
                <p>Quantity:</p>
                <FaMinus
                  onClick={() => setQuantity(quantity - 1)}
                  style={{ cursor: "pointer" }}
                />
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  value={quantity}
                  className="text-center mx-4"
                />
                <FaPlus
                  onClick={() => setQuantity(quantity + 1)}
                  className=""
                  style={{ cursor: "pointer" }}
                />
              </div>
              <button className="btn btn-green-black w-75">Add To Card</button>
              <button className="btn btn-black w-75 mt-3">Buy It Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
