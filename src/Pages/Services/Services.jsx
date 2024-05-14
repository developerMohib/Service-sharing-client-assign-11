import { Link } from "react-router-dom";
import Filter from "../../Component/Filter/Filter";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Services = () => {
  const [allSerData, setAllSerData] = useState([]);
  const [total, setTotal] = useState();
  const [search, setSearch] = useState("");
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPage = Math.ceil(total / itemPerPage);

  // data loader
  useEffect(() => {
    fetch(
      `http://localhost:5000/eduServices?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllSerData(data);
      });
  }, [currentPage, itemPerPage]);
  // data count loader
  useEffect(() => {
    fetch(`http://localhost:5000/serviceCount`)
      .then((res) => res.json())
      .then((data) => {
        setTotal(data.countData);
      });
  }, []);

  // page create
  const page = [];
  for (let i = 0; i < numberOfPage; i++) {
    page.push(i);
  }
  const handlePageChange = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(0);
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < page.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Helmet>
        {" "}
        <title>Services | Simple service sharing web application</title>{" "}
      </Helmet>
      <Filter> </Filter>
      <div>
        {" "}
        <h1 className="text-2xl text-center mt-10 ">
          My All Educational Services{" "}
        </h1>{" "}
      </div>
      <div className=" md:flex justify-end items-center mr-20 mb-5">
        <h1 className="text-3xl mr-10"> Per Page </h1>
        <p>Current page : {currentPage} </p>
        <select
          onChange={handlePageChange}
          className="border border-slate-600 rounded-lg "
          value={itemPerPage}
          name=""
          id=""
        >
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      {/* search function */}
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Type here"
          />
          <IoSearch className="text-xl"> </IoSearch>
        </label>
      </div>
      <section
        data-aos="fade-up"
        data-aos-duration="2000"
        className="container grid grid-cols-3 md:gap-8 rounded-lg gap-5 mx-auto antialiased "
      >
        {allSerData
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.serviceName.toLowerCase().includes(search);
          })
          .map((serviceCard) => (
            <article
              key={serviceCard._id}
              className="md:flex-nowrap shadow-lg mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1 my-10 bg-base-300 p-5 "
            >
              <img
                data-aos="fade-up"
                data-aos-duration="2000"
                className=" w-full object-cover h-64"
                src={serviceCard.serviceImage}
                alt=""
              />
              <div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="p-5 pb-10"
                >
                  <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                    {serviceCard.serviceName}
                  </h1>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    {serviceCard.description.substring(0, 200)}
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="bg-blue-50 p-5"
                >
                  <div className="mt-3 text-gray-600 text-sm md:text-sm">
                    *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                  </div>
                  {/* author */}
                  <div className="flex justify-between items-center mt-5 ">
                    <div>
                      <div className="text-lg text-gray-700">
                        <span className="text-gray-900 font-bold">
                          {" "}
                          Price :{" "}
                        </span>{" "}
                        {serviceCard?.servicePrice}
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
                      <div className="text-lg text-gray-700">
                        <span className="text-gray-900 font-bold">
                          {" "}
                          Location :{" "}
                        </span>{" "}
                        {serviceCard?.serviceArea}
                      </div>
                    </div>
                  </div>
                  {/* author */}
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="sm:flex sm:justify-between mt-10"
                  >
                    <div className="flex gap-4 ">
                      <img
                        className="object-cover h-10 rounded-full"
                        src={serviceCard?.providerPhoto}
                        alt="Profle"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 dark:text-gray-200">
                          {serviceCard?.providerName}
                        </p>

                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          21 SEP 2015
                        </p>
                      </div>
                    </div>

                    <Link to={`/serviceDetails/${serviceCard._id}`}>
                      <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-green-700 hover:bg-purple-600 text-white md:text-lg rounded-lg shadow-md">
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
      </section>
      <div className="text-center mb-10 ">
        <p>Current page : {currentPage} </p>
        <button onClick={handlePrev} className="btn btn-outline">
          Prev
        </button>
        {page?.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`${
              currentPage === page
                ? "mx-2 btn btn-outline bg-orange-500"
                : "mx-2 btn btn-outline"
            }`}
            key={page}
          >
            {" "}
            {page}{" "}
          </button>
        ))}
        <button onClick={handleNext} className="btn btn-outline">
          Next
        </button>
      </div>
    </div>
  );
};

export default Services;
