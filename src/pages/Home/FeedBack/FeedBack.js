import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FeedBackCard from "./FeedBackCard";

const FeedBack = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  useEffect(() => {
    fetch("http://localhost:5000/feedbacks").then((res) =>
      res
        .json()
        .then((data) => {
          console.log(data);
          setFeedbacks(data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  return (
    <section
      className="py-5 px-2"
      data-aos="fade-up"
      data-aos-offset="300"
      style={{ backgroundColor: "#e0f2da" }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="fs-1 fw-bold my-md-4">What Our Customers Says ?</h2>
          <p className="fs-5 w-75 mx-auto">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Is That It Has A More-Or-Less Normal Dist
          </p>
        </div>

        {/* carousel section  */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Slider {...settings}>
              {feedbacks.map((feedback) => (
                <FeedBackCard key={feedback._id} feedback={feedback} />
              ))}
            </Slider>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
