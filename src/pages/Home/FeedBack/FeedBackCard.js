import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const FeedBackCard = ({ feedback }) => {
  const { image, name, title, message } = feedback;
  return (
    <div className="p-3 m-3 text-center rounded-2 bg-white">
      <div className="mx-auto">
        <img src={image} alt="Client" className="mx-auto" />
      </div>
      <div className="mt-3">
        <p>
          <FaQuoteLeft className="me-2 fs-4" />
          {message}
          <FaQuoteRight className="ms-2 fs-4" />
        </p>
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default FeedBackCard;
