import Banner from "../../Pages/Banner/Banner";
import NewsLetter from "../../Pages/NewsLetter/NewsLetter";
import PopularInstructor from "../../Pages/PopularInstructor/PopularInstructor";
import Testimonial from "../../Pages/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularInstructor></PopularInstructor>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
