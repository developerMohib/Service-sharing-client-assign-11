import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ServiceDetails = () => {
  const detailsData = useLoaderData();
  const {
    service_image,
    service_name,
    service_description,
    service_price,
    service_provider
  } = detailsData;
//   console.log(detailsData, "details page");
  return (
    <div>
      {/* Details about service */}
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center gap-10 lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-4/5 h-full lg:max-w-3xl"
              src={service_image}
              //   src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana.svg"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              {service_name}
            </h1>
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white pt-8 lg:text-4xl">
                Best place to choose <br />{" "}
                <span className="text-red-700 font-bold ">
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[`${service_name}`]}
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
                {service_description} <br></br> laborum ab amet sunt recusandae?
                Reiciendis natus perspiciatis optio.
              </p>
              <p className="my-5" >
                {" "}
                <span className="font-bold ">Price :</span> {service_price}{" "}
              </p>
            <p> <span className="font-bold " >Location : </span> {service_provider.location} </p>




                {/*  */}
                <div className="flex items-center justify-between ">
                <div className="flex items-center mt-5 ">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <div className="ml-3 ">
                  <p
                    className="font-semibold text-gray-700 dark:text-gray-200"
                  >
                    {service_provider?.name}
                    {service_provider?.service_area}
                  </p>

                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    21 SEP 2015
                  </p>
                  </div>
                </div>
                <div>
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Book Now
              </button>
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
