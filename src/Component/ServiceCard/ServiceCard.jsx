import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const [ homeServices, setHomeServies ] =useState([]);
  useEffect(()=> {
    fetch(`http://localhost:5000/eduServices`)
    .then(res=> res.json())
    .then(data => {
      // console.log(data, 'service data');
      setHomeServies(data)
    })
  },[])
  // console.log(homeServices,'home card ')
  // service_image, service_name, service_description, service_provider, [image,name], service_price
  return (
    <div>
      <div className="mt-10 text-center ">
        <p className="font-light text-2xl">Find What Fascinates You</p>
        <h1 className="md:text-5xl text-4xl md:font-extrabold font-semibold ">
          Online Lessons
        </h1>
        <p className="text-xl font-light mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempori</p>
      </div>
      <div className="lg:grid grid-cols-3 gap-8 my-5 ">
        {/* <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-5 ">
          <img
            className="object-cover w-full h-64"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article"
          />

          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                Product
              </span>
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link"
              >
                I Built A Successful Blog In One Year
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </p>
            </div>

            <div className="mt-4">
              <div>
                <p>
                  {" "}
                  <span>Price : </span> $500{" "}
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    Jone Doe
                  </a>

                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    21 SEP 2015
                  </span>
                </div>
                <div>
                <Link to='/serviceDetails' > <button className="bg-green-500 btn ">view details</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {
          homeServices.slice(0,6).map(data => (
            <div key={data?._id} className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-5 ">
          <img
            className="object-cover w-full h-64"
            src={data?.service_image}
            alt="Article"
          />

          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {data?.service_name}
              </span>
              <p
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              >
                {data?.service_name}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {data?.service_description}
              </p>
            </div>

            <div className="mt-4">
              <div>
                <p>
                  {" "}
                  <span className="font-semibold" >Price : </span> {data.service_price}
                </p>
              </div>
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
                    {data?.service_provider?.name}
                  </p>

                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    21 SEP 2015
                  </p>
                  </div>
                </div>
                <div>
                <Link to={`/serviceDetails/${data?._id}`} > <button className="bg-green-500 btn ">view details</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          ))
        }
      </div>

      <div className="text-center my-10 ">
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
