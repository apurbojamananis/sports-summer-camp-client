// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-screen bg-[url('./banner1.png')] bg-cover">
            <h1>content is coming</h1>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="h-screen bg-[url('./banner2.png')] bg-cover">
            <h1>content is coming</h1>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="h-screen bg-[url('./banner3.png')] bg-cover">
            <h1>content is coming</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
