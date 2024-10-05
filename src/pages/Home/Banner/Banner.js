import React from "react";
import banner1 from "../../../assets/slider/slider-10-1.jpg";
import banner2 from "../../../assets/slider/slider-10-2.jpg";
import banner3 from "../../../assets/slider/slider-10.jpg";

const Banner = () => {
  return (
    <header>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={banner2} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block text-black text-start"
              style={{ top: 0, left: "10%", right: 0, button: 0 }}
            >
              <div
                className="h-100 d-flex flex-column justify-content-center my-auto"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <p
                  className="text-uppercase fs-5"
                  style={{ letterSpacing: "5px" }}
                >
                  Sale Up to 30% off
                </p>
                <h2
                  className="color-green fst-italic"
                  style={{ fontSize: "70px" }}
                >
                  Gift Green <br /> This <span>Holiday</span>
                </h2>
                <div>
                  <button className="btn btn-black px-5 py-2 mt-2">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={banner3} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block text-black text-start"
              style={{ top: 0, left: "10%", right: 0, button: 0 }}
            >
              <div
                className="h-100  d-flex flex-column justify-content-center my-auto"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <p
                  className="text-uppercase fs-5"
                  style={{ letterSpacing: "5px" }}
                >
                  Sale Up to 30% off
                </p>
                <h2
                  className="color-green fst-italic"
                  style={{ fontSize: "70px" }}
                >
                  Uncomplicate <br />
                  indoor <span>gardening.</span>
                </h2>
                <div>
                  <button className="btn btn-black px-5 py-2 mt-2">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={banner1} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block text-black text-start"
              style={{ top: 0, left: "10%", right: 0, button: 0 }}
            >
              <div
                className="h-100  d-flex flex-column justify-content-center my-auto"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <p
                  className="text-uppercase fs-5"
                  style={{ letterSpacing: "5px" }}
                >
                  Sale Up to 30% off
                </p>
                <h2
                  className="color-green fst-italic"
                  style={{ fontSize: "70px" }}
                >
                  Give the Gift <br /> of <span>Greenery</span>
                </h2>
                <div>
                  <button className="btn btn-black px-5 py-2 mt-2">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
