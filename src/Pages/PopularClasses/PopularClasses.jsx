import { useEffect, useState } from "react";
import { Fade } from "react-reveal";

const PopularClasses = () => {
  const [allPopularClass, setAllPopularClass] = useState([]);

  useEffect(() => {
    fetch(
      "https://sports-summer-camp-server-apurbojamananis.vercel.app/popularClasses"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllPopularClass(data);
      });
  }, []);

  //

  return (
    <section className="bg-gray-900 text-white">
      <div className="container px-6 py-32 mx-auto min-h-screen">
        <div>
          <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl dark:text-white">
            Our Popular Classes
          </h1>

          <p className="md:w-2/3 mx-auto my-6 text-center text-gray-300">
            We offer popular classes for all ages and skill levels. Join us for
            expert coaching, a supportive environment, and a wide range of
            sports to choose from. Elevate your game and achieve your goals with
            our renowned programs.
          </p>

          <div>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {allPopularClass.map((PopularClass) => (
                <Fade key={PopularClass._id} bottom>
                  <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div
                      className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                      style={{
                        backgroundImage: `url(${PopularClass.imageUrl})`,
                      }}
                    ></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                      <h3 className="p-2 font-bold tracking-wide text-center text-gray-800  dark:text-white">
                        {PopularClass.className}
                      </h3>

                      <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          ${PopularClass.price}
                        </span>
                        <button className="px-2 py-1 text-xs font-semibold text-white  transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                          Enrolled Person {PopularClass.totalEnrolled}
                        </button>
                      </div>
                      <div className="p-2 mt-5">
                        <button className="btn btn-neutral btn-sm w-full capitalize">
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
