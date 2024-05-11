import { Link, useLoaderData } from "react-router-dom";
import Filter from "../../Component/Filter/Filter";
const Services = () => {
  const allSerData = useLoaderData();
  console.log(allSerData);
  return (
    <div>
      <Filter> </Filter>
      <section className="container grid grid-cols-2 gap-8 mx-auto antialiased my-10 ">
        {allSerData?.map((serviceCard) => (
          <article
            key={serviceCard._id}
            className="md:flex-nowrap shadow-lg mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1 my-10 bg-base-300 p-5 "
          >
            <img
              className=" w-full object-cover"
              // src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
              src={serviceCard.service_image}
              alt=""
            />
            <div>
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  {serviceCard.service_name}
                </h1>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  {serviceCard.service_description}
                  Located in Rajshahi Division, Bogra is one of the oldest and
                  most fascinating towns in Bangladesh
                </p>
              </div>
              <div className="bg-blue-50 p-5">
                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                  *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                </div>
                {/* author */}
                <div className="flex justify-between items-center mt-5 ">
                  
                <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold"> Price : </span>{" "}
                      {serviceCard.service_price}
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        16 reviews
                      </div>
                    </div>
                  </div>
                </div>
                {/* author */}
                <div className="sm:flex sm:justify-between mt-10">
                <div className="flex gap-4 ">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-200">
                      {serviceCard?.service_provider?.name}
                    </p>

                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      21 SEP 2015
                    </p>
                  </div>
                  </div>

                  <Link to={`/serviceDetails/${serviceCard._id}`} >
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    View details
                  </button> 
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Services;
