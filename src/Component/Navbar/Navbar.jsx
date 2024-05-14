import { useContext, useEffect, useState } from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthCustomContext } from "../../Provider/Provider";
import { FaBookOpenReader } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthCustomContext);
  const navLinks = (
    <div className="">
      <NavLink className="px-1 py-1 mx-1 hover:border-b " to="/">
        Home
      </NavLink>
      <NavLink
        className="px-1 py-1 mx-1 hover:border-b border-black"
        to="/services"
      >
        Services
      </NavLink>

      {user && (
        <>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1 flex ">
              Dashboard{" "}
              <GoChevronDown className="text-xl font-extralight ml-2 " />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="hover:border-b border-black" to="/addService">
                  {" "}
                  Add Service{" "}
                </Link>
              </li>
              <li>
                <Link className="hover:border-b border-black" to="/manage">
                  {" "}
                  Manage Service{" "}
                </Link>
              </li>
              <li>
                <Link className="hover:border-b border-black" to="/booked">
                  {" "}
                  Booked-Services{" "}
                </Link>
              </li>
              <li>
                <Link className="hover:border-b border-black" to="/todoservice">
                  {" "}
                  Service-To-Do{" "}
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <NavLink
        className="px-1 py-1 mx-1 hover:border-b border-black "
        to="/contact"
      >
        Contact Us
      </NavLink>
    </div>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user, "user log out");
      })
      .catch((error) => {
        console.error(error);
      });
  };



  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    console.log("Local theme:", localTheme);
    setTheme(localTheme || "light"); // Fallback to "light" theme if local storage is empty
  }, []);
  
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
      console.log("Theme set to local storage:", theme);
      document.querySelector("html").setAttribute("data-theme", theme);
    } catch (error) {
      console.error("Error setting theme to local storage:", error);
    }
  }, [theme]);
  
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("night");
      console.log("Theme set to night");
    } else {
      setTheme("light");
      console.log("Theme set to light");
    }
  };
  
  

  // useEffect(() => {
  //   const localTheme = localStorage.getItem("theme");
  //   setTheme(localTheme);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.querySelector("html").setAttribute("data-theme", theme);
  // }, [theme]);

  // const handleTheme = (e) => {
  //   if (e.target.checked) {
  //     setTheme("night");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  return (
    <div>
      <div>
        <div className="navbar bg-base-100 md:px-10 shadow-lg z-10">
          <div className="navbar-start">
            <div onClick={() => setOpen(!open)} className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {open === true ? (
                  <MdOutlineRestaurantMenu className="text-2xl">
                    {" "}
                  </MdOutlineRestaurantMenu>
                ) : (
                  <RiMenuAddLine className="text-2xl"> </RiMenuAddLine>
                )}
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-56 ${
                  open === true ? "" : " hidden"
                } `}
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/" className=" font-bold text-xl">
              <div className="text-center">
                <div className="flex gap-2 ">
                  <span>
                    <FaBookOpenReader className="text-2xl text-orange-500" />
                  </span>
                  <span className="text-green-500"> Online </span>
                </div>
                <p className="text-orange-500">Courses</p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className=" space-x-1 navbar-end">
            <div>
              {user ? (
                <div className="flex gap-2 ">
                  <div
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    data-tooltip-place="left"
                    className="text-2xl"
                  >
                    {" "}
                    <img
                      className="rounded-full w-12"
                      src={user?.photoURL}
                      alt="profile"
                    />{" "}
                  </div>
                  <Tooltip id="my-tooltip" />
                  <div
                    onClick={handleLogOut}
                    className="relative inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative">Log Out </span>
                  </div>
                </div>
              ) : (
                <div className="flex">
                  <Link
                    to="/login"
                    className="relative inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative">Login </span>
                  </Link>
                  <Link
                    to="/register"
                    className="relative inline-flex items-center justify-center p-2 overflow-hidden tracking-tighter border rounded-lg group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative">Register </span>
                  </Link>
                </div>
              )}
            </div>

            <div>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onClick={handleTheme}
                  type="checkbox"
                  className="theme-controller"
                  value="night"
                />

                {/* sun icon */}
                <LuSun className="swap-off fill-current md:w-10 w-5 h-10">
                  {" "}
                </LuSun>

                {/* moon icon */}
                <LuMoonStar className="swap-on fill-current md:w-10 w-5 h-10">
                  {" "}
                </LuMoonStar>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
