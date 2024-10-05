import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger fw-bold">Opps!</span> Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="btn text-white px-3 py-2"
          style={{ backgroundColor: "#79a206" }}
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
