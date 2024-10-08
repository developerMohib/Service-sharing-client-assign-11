import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import RelaventShow from "../../Component/RelaventShow/RelaventShow";
import { useContext, useEffect, useState } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import toast from "react-hot-toast";
// tanstack

const ToDoService = () => {
  const { user } = useContext(AuthCustomContext);
  const loginUser = user?.email;
  const toDoData = useLoaderData();
  // const filterData = toDoData.filter((data) => data.buyerEmail === loginUser);
  const [filterData, setFilteredData] = useState([]) ;



  useEffect(() => {
    setFilteredData(toDoData.filter((data) => data.buyerEmail === loginUser));
  }, [toDoData, loginUser]);

  if (filterData.length <= 0) {
    return <RelaventShow> </RelaventShow>;
  }

  const handleChange = (e, id) => {
    e.preventDefault();
    const status = e.target.value;
    // update single data
    fetch(`${import.meta.env.VITE_baseURL}/bookedServices/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "from fetch");
        if (data.modifiedCount > 0) {
          toast.success("Please Refresh to see update ");
          setFilteredData((prevData) =>
            prevData.map((item) => (item._id === id ? { ...item, status } : item))
          );
        }
      });
      // getData()
  };

  return (
    <div>
      <Helmet>
        {" "}
        <title>
          Service To Do | Simple service sharing web application
        </title>{" "}
      </Helmet>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-sm breadcrumbs "
      >
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/addService"> Add Service </Link>
          </li>
          <li>
            <Link to="/manage"> Manage Service </Link>
          </li>
          <li>
            <Link> To do Service </Link>
          </li>
        </ul>
      </div>

      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center font-bold my-5 text-2xl underline "
      >
        To do Service
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="text-center my-5 text-sm underline "
      >
        My Post length {filterData.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead data-aos="fade-down" data-aos-duration="1000">
            <tr>
              <th>Service Image</th>
              <th>Price</th>
              <th>My Name</th>
              <th>My Email</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filterData?.map((data) => (
              <tr key={data._id}>
                <td data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data.serviceUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.serviceName}</div>
                      <div className="text-sm opacity-50">
                        {" "}
                        {data.serviceArea}{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td data-aos="zoom-in" data-aos-duration="1000">
                  {" "}
                  $ {data.servicePrice}
                </td>
                <td data-aos="zoom-in" data-aos-duration="1000">
                  {data.buyerName}
                </td>
                <td data-aos="zoom-in" data-aos-duration="1000">
                  {data.buyerEmail}
                </td>
                <th data-aos="fade-up" data-aos-duration="1000">
                  {/* update button  */}
                  <select
                    onChange={(e) => handleChange(e, data._id)}
                    className="border border-slate-500 p-2 rounded-lg"
                    value={data.status}
                    name=""
                    id=""
                    disabled={data.status === "completed"}
                  >
                    <option value="pendeing">Pending</option>
                    <option value="working">Working</option>
                    <option value="completed">Completed</option>
                  </select>
                  {/* update button  */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDoService;
