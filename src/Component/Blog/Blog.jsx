const Blog = () => {
  return (
    <div className="md:grid grid-cols-3 gap-8 my-10 ">
      {/* card - 1  */}
      <div className="max-w-screen-xl mx-auto border rounded-lg border-slate-300 ">
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000"
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative -mt-16 px-5 pt-5 pb-16 bg-base-200 hover:bg-slate-300 rounded-lg m-10">
            <a
              href="#"
              className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              The Best Activewear from the Nordstrom Anniversary Sale
            </a>
            <p className="text-gray-500 text-sm">
              Today, I am covering one of my favorite parts of the Nordstrom
              Anniversary Sale: the activewear!
            </p>
            <p className="mt-5 text-gray-600 text-xs">
              By
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Mehdi Ahmadi
              </a>{" "}
              | in{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* card - 2  */}
      <div className="max-w-screen-xl mx-auto border rounded-lg border-slate-300 ">
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000"
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative -mt-16 px-5 pt-5 pb-16 bg-base-200 hover:bg-slate-300 rounded-lg m-10">
            <a
              href="#"
              className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              The Best Activewear from the Nordstrom Anniversary Sale
            </a>
            <p className="text-gray-500 text-sm">
              Today, I am covering one of my favorite parts of the Nordstrom
              Anniversary Sale: the activewear!
            </p>
            <p className="mt-5 text-gray-600 text-xs">
              By
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Mehdi Ahmadi
              </a>{" "}
              | in{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* card - 3 */}
      <div className="max-w-screen-xl mx-auto border rounded-lg border-slate-300 ">
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000"
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative -mt-16 px-5 pt-5 pb-16 bg-base-200 hover:bg-slate-300 rounded-lg m-10">
            <a
              href="#"
              className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              The Best Activewear from the Nordstrom Anniversary Sale
            </a>
            <p className="text-gray-500 text-sm">
              Today, I am covering one of my favorite parts of the Nordstrom
              Anniversary Sale: the activewear!
            </p>
            <p className="mt-5 text-gray-600 text-xs">
              By
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Mehdi Ahmadi
              </a>{" "}
              | in{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
