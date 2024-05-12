const Filter = () => {
  return (
    <div>
      <div className="text-center mt-10 md:mt-24 ">
        <div className="mt-10">
          <h1 data-aos="fade-down" data-aos-duration="3000" data-aos-delay="2000" className="text-xl font-light text-center">
          Find What Fascinates You
          </h1>
          <h1 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000" className="md:text-4xl text-4xl md:font-bold font-semibold text-center my-5 ">
            Find Your Your Best Teacher
          </h1>
          <h1 className="text-2xl my-5 font-bold text-center">Find a Tutor</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000" className="md:join w-[90%] ">
          <select
            //   onChange={handleSortChange}
            className="select select-bordered w-[90%] block mx-auto join-item"
          >
            <option defaultValue>Average Cost</option>
            <option value="descending">Ascending</option>
            <option value="ascending">Descending </option>
          </select>

          <select
            // onChange={handleSortChange}
            className="select select-bordered w-[90%] block mx-auto my-3 join-item"
          >
            <option defaultValue>Average Vistior</option>
            <option value="descending">Ascending</option>
            <option value="ascending">Descending </option>
          </select>

          <select className="select select-bordered w-[90%] block mx-auto join-item">
            <option value="seasonality" defaultValue>
              Seasonality
            </option>
            <option>Winter</option>
            <option>Summer</option>
            <option>Rainy</option>
          </select>
          <div className="">
            <button className="bg-green-500 btn md:w-36 join-item">
              Find Your Hope{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
