import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section className="container mx-auto my-5" data-aos="fade-up">
      <ul className="nav justify-content-center text-uppercase gap-3">
        <li className="nav-item">
          <Link className="nav-link active font-extrabold"> TOP RATED</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"> BESTSELLER</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"> NEW ARRIVALS</Link>
        </li>
      </ul>
      <div className="row g-3 mt-2 mb-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
