import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ServiceDetails = () => {
  const detailsData = useLoaderData();
  const {
    serviceImage,
    serviceName,
    description,
    providerName,
    providerPhoto,
    servicePrice,
    serviceArea,
    _id,
  } = detailsData;
    // console.log(detailsData, "details page");
  return (
    <div>
      {/* Details about service */}
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center gap-10 lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={serviceImage}
                // src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana.svg"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              {serviceName}
            </h1>
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white pt-8 lg:text-4xl">
                Best place to choose <br />{" "}
                <span className="text-red-700 font-bold ">
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[`${serviceName}`]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              {/* animation text  */}

              <p className="mt-3 text-gray-600 dark:text-gray-400">
               {description} <br></br> laborum ab amet sunt recusandae?
                Reiciendis natus perspiciatis optio.
              </p>
              <p className="my-5">
                {" "}
                <span className="font-bold ">Price :</span> {servicePrice}{" "}
              </p>
              <p>
                {" "}
                <span className="font-bold ">Location : </span>{" "}
                {serviceArea}{" "}
              </p>

              {/*  */}
              <div className="flex items-center justify-between ">
                <div className="flex items-center mt-5 ">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={providerPhoto}
                    alt="Profile"
                  />
                  <div className="ml-3 ">
                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                      {providerName}
                    </p>

                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      21 SEP 2015
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative inline-flex items-center px-8 py-2 overflow-hidden font-medium text-indigo-600 border border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
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
                    <Link to={`/booknow/${_id}`} > <span className="relative">Book Now</span> </Link>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      {/* Details about service */}
    </div>
  );
};

export default ServiceDetails;
