// import { useQuery } from "react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Slide from "react-reveal/Slide";

const PopularInstructor = () => {
  const [allInstructor, setAllInstructor] = useState([]);

  useEffect(() => {
    fetch(
      "https://sports-summer-camp-server-apurbojamananis.vercel.app/users/popularInstructors"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllInstructor(data);
      });
  }, []);
  return (
    <section className="bg-gray-900 text-white">
      <hr />
      <div className="container px-6 py-32 mx-auto min-h-screen">
        <div>
          <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl dark:text-white">
            Our Popular Instructor
          </h1>

          <p className=" md:w-2/3 mx-auto my-6 text-center text-gray-300">
            Our instructors not only excel in their technical knowledge but also
            possess outstanding communication and teaching skills. They have the
            ability to break down complex movements and strategies, ensuring
            that athletes of all levels can understand and implement them
            effectively. With their guidance, athletes can develop and refine
            their skills, reaching new heights in their athletic pursuits.
          </p>

          <div>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {allInstructor.map((instructor) => (
                <Slide key={instructor._id} bottom>
                  <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-neutral dark:border-gray-700 dark:hover:border-transparent">
                    <img
                      className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src={instructor.photoUrl}
                      alt=""
                    />

                    <h1 className="mt-4 text-2xl font-semibold capitalize dark:text-white group-hover:text-white">
                      {instructor.name}
                    </h1>

                    <p className="mt-2  capitalize dark:text-gray-300 group-hover:text-gray-300">
                      {instructor.email}
                    </p>
                    <div className="flex gap-3 py-3 text-1xl">
                      <FaFacebook></FaFacebook>
                      <FaLinkedin></FaLinkedin>
                      <FaInstagram></FaInstagram>
                    </div>
                  </div>
                </Slide>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularInstructor;
