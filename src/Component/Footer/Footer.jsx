import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebook,FaLinkedinIn,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
      <footer className="bg-base-300 dark:bg-gray-900">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
              <Link to="/" className=" font-bold text-xl">
              <div>
                <div className="flex items-start gap-2 ">
                  <span>
                    <FaBookOpenReader className="text-2xl text-orange-500" />
                  </span>
                  <span className="text-green-500"> Online </span>
                </div>
                <p className="text-orange-500">Courses</p>
              </div>
            </Link>
                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                  Join 31,000+ other and never miss out on new tips, tutorials,
                  and more.
                </p>

                <div className="flex mt-6 -mx-2">
                  <a href="https://www.facebook.com/mohibullah.jubileean" target="_blank"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5 fill-current"> </FaFacebook>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mohibullah-mohim-b0b43320a/" target="_blank"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="LinkedinIn"
                  >
                    <FaLinkedinIn className="w-5 h-5 fill-current"> </FaLinkedinIn>
                  </a>

                  <a
                    href="https://github.com/developerMohib" target="_blank"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Github"
                  >
                    <FaGithub className="w-5 h-5 fill-current"/>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    About
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    community
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Careers
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Blog
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Tec
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Music
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Videos
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Products
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Mega cloud
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Aperion UI
                  </a>
                  <a
                    href="#"
                    className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Online Educaional Services
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Contact
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    +1 526 654 8965
                  </span>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    example@email.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-500 border-none dark:bg-gray-700" />

          <div >
            <p className="flex justify-center text-gray-500 dark:text-gray-400">
              © Brand 2020 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
