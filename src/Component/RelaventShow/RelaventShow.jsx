import { Link } from "react-router-dom";

const RelaventShow = () => {
  return (
    <div>
      <div className="hero min-h-[calc(100vh-350)] py-10  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1  data-aos="fade-down" data-aos-duration="3000" data-aos-delay="1000" className="text-5xl font-bold">Hello there</h1>
            <p  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className="py-6">
              If You are new here <br /> You have not pushase yet <br /> Or not
              added yet please click below, where as your wish
            </p>
            <div  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2000" className="space-x-5">
              <Link to="/services">
                {" "}
                <button
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="2000"
                  className="btn btn-outline bg-green-500 text-white "
                >
                  Book Now{" "}
                </button>{" "}
              </Link>
              <Link to="/addService">
                {" "}
                <button
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="2000"
                  className="btn btn-outline bg-green-500 text-white "
                >
                  Add Data
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaventShow;
