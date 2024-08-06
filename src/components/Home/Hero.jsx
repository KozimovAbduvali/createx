import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Bgimage from "../../assets/bgimage.jpg";
import Bgimage2 from "../../assets/bgimage2.jpg";
import Bgimage3 from "../../assets/bgimage3.jpg";
import Bgimage4 from "../../assets/bgimage4.jpg";

export default function Hero() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const num = (index + 1).toString().padStart(2, "0");
      return `<span class="${className}">${num}</span>`;
    },
  };

  const cardsHero = [
    {
      id: 1,
      bg: Bgimage,
    },
    {
      id: 2,
      bg: Bgimage2,
    },
    {
      id: 3,
      bg: Bgimage3,
    },
    {
      id: 4,
      bg: Bgimage4,
    },
  ];

  return (
    <>
      <Swiper
        effect={"fade"}
        pagination={pagination}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {cardsHero.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className="slide-content bg-cover bg-center h-full"
              style={{
                backgroundImage: `url(${card.bg})`,
              }}
            >
              <div className="bg-black/60 w-full min-h-screen flex md:items-center text-white py-8">
                <div className="max-w-7xl w-full mx-auto px-4 lg:px-6">
                  <div className="max-w-xl">
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl uppercase tracking-[1px]">
                      create<span className="text-primary">x</span> construction
                    </h1>
                    <p className="md:text-xl mt-6">
                      Cras ultrices leo vitae non viverra. Fringilla nisi
                      quisque consequat, dignissim vitae proin ipsum sed.
                      Pellentesque nec turpis purus eget pellentesque integer
                      ipsum elementum felis.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-5 mt-8 md:mt-12">
                    <Link
                      className="border border-white rounded font-bold hover:bg-white hover:text-gray-800 transition duration-300 px-10 py-3"
                      to="/about"
                    >
                      Learn more about us
                    </Link>

                    <Link
                      className="bg-primary rounded font-bold hover:bg-primary/80 transition duration-300 px-10 py-3"
                      to="/about"
                    >
                      SUBMIT REQUEST
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
