import Banner from "../../Pages/Banner/Banner";
import NewsLetter from "../../Pages/NewsLetter/NewsLetter";
import PopularClasses from "../../Pages/PopularClasses/PopularClasses";
import PopularInstructor from "../../Pages/PopularInstructor/PopularInstructor";
import Testimonial from "../../Pages/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
