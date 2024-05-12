import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, signInGoogle} = useContext(AuthCustomContext);
  const notifyLogin = () => toast.success("Login successfully");
  const Navigete = useNavigate();
  const location = useLocation() ;
  console.log(location, 'location')
  const handleLogin = (e) => {
    e.preventDefault();
    const fromm = e.target;
    const email = fromm.email.value;
    const password = fromm.password.value;

    // login with emain pass
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        notifyLogin();
      })
      .catch((error) => {
        console.log(error);
      });
      Navigete('/')
  };

  const handleGoogleLogin = () => {
    signInGoogle()
    .then((result) => {
      console.log(result.user);
      Swal.fire({
        icon: 'success',
        title: "success!",
        text: 'You have logged in successfully!.'
      });
      // <Navigate  ></Navigate>
    })
    .catch((error) => {
      console.error(error);
    });
  }
  // const handleTwitterLogin = () => {
  //   logInWithTwitter()
  //   .then((result) => {
  //     console.log(result.user);
  //     Swal.fire({
  //       icon: 'success',
  //       title: "success!",
  //       text: 'You have logged in successfully!.'
  //     });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)]">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
          </p>

          <div
            onClick={handleGoogleLogin}
            className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
          >
            <div className="flex items-center justify-center">
              <div className="px-4 py-2">
                <FaGoogle> </FaGoogle>
              </div>
              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </div>
          </div>
          {/* <div onClick={handleTwitterLogin} className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 ">
            <div className="flex items-center justify-center">
              <div className="px-4 py-2">
                <FaTwitter />
              </div>
              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Twitter
              </span>
            </div>
          </div> */}

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or login with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/register"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
