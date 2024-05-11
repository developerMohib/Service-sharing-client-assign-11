import { FaFacebook,FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const Team = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="py-10 mx-auto">
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            THE TEAM
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Our<span className="text-indigo-600"> Tuitor </span>
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="text-center bg-white gap-5 rounded-lg border border-slate-400 ">
            <img
              className="w-100"
              src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            />
            <div className="p-4 text-start ">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  Mehdi Mohammadi
                </a>
                <p className="text-gray-500 uppercase text-sm">Web developer</p>
              </div>
              <div className="my-4 flex justify-start gap-5 items-center">
                <a href="#">
                  <FaFacebook> </FaFacebook>
                </a>
                <a href="#">
                <FaTwitter />
                </a>

                <a href="#">
                  <IoLogoInstagram> </IoLogoInstagram>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center bg-white gap-5 rounded-lg border border-slate-400">
            <img
              className="w-100"
              src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            />
            <div className="p-4 text-start">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  Yahya R. Makarim
                </a>
                <p className="text-gray-500 uppercase text-sm">
                  president &amp; CEO
                </p>
              </div>
              <div className="my-4 flex justify-start gap-5 items-center">
                <a href="#">
                  <FaFacebook> </FaFacebook>
                </a>
                <a href="#">
                <FaTwitter />
                </a>

                <a href="#">
                  <IoLogoInstagram> </IoLogoInstagram>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center bg-white gap-5 rounded-lg border border-slate-400">
            <img
              className="w-100"
              src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            />
            <div className="p-4 text-start">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  Ahmad Sultani
                </a>
                <p className="text-gray-500 uppercase text-sm">Web designer</p>
              </div>
              <div className="my-4 flex justify-start gap-5 items-center">
                <a href="#">
                  <FaFacebook> </FaFacebook>
                </a>
                <a href="#">
                <FaTwitter />
                </a>

                <a href="#">
                  <IoLogoInstagram> </IoLogoInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
