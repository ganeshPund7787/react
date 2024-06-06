import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { ImgaeURLS } from "../data.js";

const Home = () => {
  const { Products } = useSelector((state) => state.products);
  SwiperCore.use(Navigation);
  return (
    <>
      <Swiper navigation>
        {ImgaeURLS.map((img) => (
          <SwiperSlide key={Math.random()}>
            <div
              className="h-[550px]"
              style={{
                background: `url(${img}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-wrap space-x-10 space-y-10 justify-evenly items-center">
        {Products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
