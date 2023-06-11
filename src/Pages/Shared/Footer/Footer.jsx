import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t-2 pt-20">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img className="w-auto h-7" src="./WhiteLogo.png" alt="" />
              </a>

              <p className="max-w-sm mt-3 text-gray-400">
                Join 31,000+ other and never miss out on new tips, tutorials,
                and more.
              </p>

              <div className="flex mt-4 ">
                <a
                  href="#"
                  className="mx-2text-gray-600 transition-colors duration-300 text-gray-300  hover:text-blue-400"
                  aria-label="Reddit"
                >
                  <FaFacebook></FaFacebook>
                </a>

                <a
                  href="#"
                  className="mx-2  transition-colors duration-300 text-gray-300  hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <FaInstagram></FaInstagram>
                </a>

                <a
                  href="#"
                  className="mx-2  transition-colors duration-300 text-gray-300 hover:text-blue-400"
                  aria-label="Github"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className=" uppercase text-white">About</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  community
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className=" uppercase text-white">Blog</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  Soccer
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  Martial Arts
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  Judo
                </a>
              </div>

              <div>
                <h3 className=" uppercase text-white">Training Camp</h3>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  Soccer Camp
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  Tennis Camp
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm  text-gray-400 hover:underline"
                >
                  Swimming Camp
                </a>
              </div>

              <div>
                <h3 className=" uppercase text-white">Contact</h3>
                <span className="block mt-2 text-sm  text-gray-400 hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm  text-gray-400 hover:underline">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 border-none bg-gray-700" />

        <div>
          <p className="text-center  text-gray-400">
            © Copyright 2023 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
