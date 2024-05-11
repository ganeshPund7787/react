import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/img2.png";
import img2 from "../assets/img3.png";
import img3 from "../assets/img5.png";
import img4 from "../assets/img6.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2000}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="legend">Mern stack</p>
        </div>

        <div>
          <img src={img2} alt="item2" />
          <p className="legend">service</p>
        </div>
        <div>
          <img src={img3} alt="item2" />
          <p className="legend">support</p>
        </div>
        <div>
          <img src={img4} alt="item2" />
          <p className="legend">daily task</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
