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
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
            <div className="container mx-auto text-white flex h-full items-center ">
              <div className="w-[52%]">
                <h3 className="font-primary font-medium mb-5">
                  Unleash Your Potential on the Court
                </h3>
                <h1 className="font-primary text-7xl font-bold mb-5 leading-[84px]">
                  Master the Game of Tennis at our Tennis Academy
                </h1>
                <p className="font-secondary leading-6">
                  Experience world-class tennis coaching and training at [Your
                  Academy Name]. Our expert coaches will help you refine your
                  techniques, improve your footwork, and develop a winning
                  mindset. Whether you are a beginner or an advanced player, our
                  tailored programs cater to all skill levels. Join us and take
                  your game to the next level.
                </p>
                <div className="mt-10">
                  <button className="py-2 px-4 bg-white text-[#212733] font-semibold rounded hover:outline  hover:outline-offset-2 hover:text-white hover:bg-transparent hover:transition-all hover:duration-200">
                    Join our Academy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-screen bg-[url('./banner3.png')] bg-cover">
            <div className="container mx-auto text-white flex h-full items-center ">
              <div className="w-[52%]">
                <h3 className="font-primary font-medium mb-5">
                  Hit It Out of the Park with Professional Coaching
                </h3>
                <h1 className="font-primary text-7xl font-bold mb-5 leading-[84px]">
                  Hit Out of the Park with Professional Cricket Training
                </h1>
                <p className="font-secondary leading-6">
                  Are you passionate about cricket? Our cricket academy offers
                  comprehensive training programs designed to enhance your
                  skills and elevate your game. From batting and bowling
                  techniques to fielding drills and tactical strategies, our
                  experienced coaches will guide you every step of the way. Join
                  us to unlock your cricketing potential and make your mark on
                  the field.
                </p>
                <div className="mt-10">
                  <button className="py-2 px-4 bg-white text-[#212733] font-semibold rounded hover:outline  hover:outline-offset-2 hover:text-white hover:bg-transparent hover:transition-all hover:duration-200">
                    Join our Academy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-[url('./banner2.png')] bg-cover">
            <div className="container mx-auto text-white flex h-full items-center ">
              <div className="w-[52%]">
                <h3 className="font-primary font-medium mb-5">
                  Score Big with Expert Football Coaching
                </h3>
                <h1 className="font-primary text-7xl font-bold mb-5 leading-[84px]">
                  Train and Dominate the Field from our Football Academy
                </h1>
                <p className="font-secondary leading-6">
                  At our Academy, we are committed to helping you become the
                  best football player you can be. Our professional coaches
                  provide top-notch training in technical skills, tactical
                  awareness, physical fitness, and teamwork. Join our football
                  academy to hone your abilities, experience the thrill of the
                  game, and forge lasting friendships with fellow football
                  enthusiasts.
                </p>
                <div className="mt-10">
                  <button className="py-2 px-4 bg-white text-[#212733] font-semibold rounded hover:outline  hover:outline-offset-2 hover:text-white hover:bg-transparent hover:transition-all hover:duration-200">
                    Join our Academy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
