import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css";
import bannerInfo from "../../../jsons/bannerInfo.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerInfo.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative lg:h-[540px]">
              <img
                src={banner?.bannerImg}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
              />
              <div className="relative bg-gray-900 bg-opacity-70 h-full">
                <div
                  className="flex flex-col justify-center items-center pt-40 pb-16 lg:pt-20 lg:pb-10 md:pt-36 md:pb-0"
                  data-aos="zoom-in"
                  data-aos-duration="1400"
                >
                  <h1 className="text-center neon-text text-xl font-bold mx-4 md:text-3xl mb-6">
                    {banner.heading_short}
                  </h1>
                  <h1 className="text-center text-xl font-bold mx-4 md:text-5xl text-white max-w-2xl mb-6">
                    {banner.heading}
                  </h1>
                  <p className="text-white text-center max-w-3xl text-lg">
                    {banner.description}
                  </p>
                  <div className="mt-6">
                    <Link to="/products">
                      <button className="px-5 py-3 text-white bg-[#e08534] rounded-lg btn-custom font-bold">
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
