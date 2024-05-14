import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const [homeServices, setHomeServies] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/eduServices`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, 'service data');
        setHomeServies(data);
      });
  }, []);
  // console.log(homeServices,'home card ')
  return (
    <div>
      <div className="mt-10 md:mt-24 text-center ">
        <p
          data-aos="fade-left"
          data-aos-duration="2000"
          className="font-light text-2xl"
        >
          Find What Fascinates You
        </p>
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="md:text-4xl text-4xl md:font-extrabold font-semibold my-3 "
        >
          Online Lessons
        </h1>
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-lg font-light md:w-1/2 mx-auto mt-5"
        >
          online classes have revolutionized the way people access education,
          making it more convenient, accessible, and flexible than ever before.
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-10 my-5 ">
        {homeServices.slice(0, 6).map((data) => (
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            key={data?._id}
            className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md border border-slate-400 dark:bg-gray-800 my-5 "
          >
            <img
              className="object-cover w-full h-64"
              src={data?.serviceImage}
              alt={data?.serviceName}
            />

            <div className="p-6">
              <div>
                <span
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"
                >
                  {data?.serviceName}
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                >
                  {data?.serviceName}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  title={data?.description}
                  className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  {data?.description.substring(0, 100)}...
                </p>
              </div>

              <div className="mt-4">
                <div>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {" "}
                    <span className="font-semibold">Price : </span>${" "}
                    {data?.servicePrice}
                  </p>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center mt-5 ">
                    <img
                      className="object-cover h-10 rounded-full"
                      src={data?.providerPhoto}
                      alt="Avatar"
                    />
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      className="ml-3 "
                    >
                      <p className="font-semibold text-gray-700 dark:text-gray-200">
                        {data?.providerName}
                      </p>

                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        21 SEP 2015
                      </p>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <Link to={`/serviceDetails/${data?._id}`}>
                      {" "}
                      <button className="bg-green-500 btn ">
                        view details
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="2000" className="text-center my-10 ">
        {/* button  */}
        <Link
          to="/services"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Show All
          </span>
        </Link>

        {/* button  */}
      </div>
    </div>
  );
};

export default ServiceCard;
