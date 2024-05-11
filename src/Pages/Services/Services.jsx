import { useLoaderData } from "react-router-dom";

const Services = () => {
    const allSerData = useLoaderData() ;
    console.log(allSerData)
    return (
        <section className="container mx-auto p-10 md:p-20 antialiased">
      <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
        <img className="w-full max-h-[400px] object-cover md:w-52" src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg" alt="" />
        <div>
          <div className="p-5 pb-10">
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              The Magnificent Bogra
            </h1>
            <p className="text-xl text-gray-400 mt-2 leading-relaxed">
              Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh
            </p>
          </div>
          <div className="bg-blue-50 p-5">
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="text-lg text-gray-700">
                  <span className="text-gray-900 font-bold">196 km</span> from Dhaka
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                    16 reviews
                  </div>
                </div>
              </div>
              <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                Book Ticket
              </button>
            </div>
            <div className="mt-3 text-gray-600 text-sm md:text-sm">
              *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
            </div>
          </div>
        </div>
      </article>
    </section>
    );
};

export default Services;