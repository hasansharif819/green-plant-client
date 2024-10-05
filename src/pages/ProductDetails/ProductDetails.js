import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetails = () => {
  const product = useLoaderData();
  const { img, name, price, discount_price, quantity } = product;
  const [buyingQuantity, setBuyingQuantity] = useState(1);

  return (
    <section>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <PhotoProvider>
              <PhotoView src={img}>
                <img
                  src={img}
                  className="img-fluid w-100"
                  alt="Plant"
                  style={{ objectFit: "cover" }}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="py-2">
              <h2>{name}</h2>
              <div className="d-flex gap-3 align-items-center my-2">
                <p className="card-text fs-4 fw-bold mb-0">
                  <span>Price: </span>${parseFloat(discount_price).toFixed(2)}
                </p>
                <p className="card-text fs-5 text-decoration-line-through">
                  ${parseFloat(price).toFixed(2)}
                </p>
              </div>

              <p>
                Availability: <span className="fw-semibold">{quantity} In Stock</span>
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
                  onClick={() => setBuyingQuantity(buyingQuantity - 1)}
                  style={{ cursor: "pointer" }}
                />
                <input
                  type="number"
                  name="quantity"
                  defaultValue={buyingQuantity}
                  value={buyingQuantity}
                  className="text-center mx-4"
                />
                <FaPlus
                  onClick={() => setBuyingQuantity(buyingQuantity + 1)}
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
