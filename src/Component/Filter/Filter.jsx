const Filter = () => {
  return (
    <div>
      <div className="text-center mt-10 ">
        <div className="mt-10">
          <h1 className="md:text-5xl text-4xl md:font-bold font-semibold text-center">
            Find Your Your Best Teacher
          </h1>
          <h1 className="text-2xl my-5 font-bold text-center">Find a Tutor</h1>
        </div>
        <div className="md:join w-[90%] ">
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
