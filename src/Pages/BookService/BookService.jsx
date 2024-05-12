import { useContext, useEffect, useState } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import { FaRegEdit } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BookService = () => {
  const [bookData, setBookData] = useState([]);
  const { user, loading } = useContext(AuthCustomContext);
  // console.log(bookData)

  useEffect(() => {
    getData();
  }, [user?.email]);

  const getData = () => {
    // to do : which data she / he added
    fetch(`http://localhost:5000/bookedServices/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  };

  if (loading) {
    return <p> loading...... </p>;
  }

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const data = axios.delete(
            `http://localhost:5000/bookedServices/${id}`
          );
          console.log(data);
          toast.success("delete successful");
          getData();

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch {
      (err) => {
        toast.error(err.message);
      };
    }
  };

  return (
    <div>
      <div className="text-sm breadcrumbs ">
        <ul>
          <li>
            <Link to='/' > Home </Link>
          </li>
          <li>
            <Link to='/addService' > Add Service </Link>
          </li>
          <li>
            <Link to='/manage' > Manage Service </Link>
          </li>
          <li>
          <Link >Booked Service</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-center font-bold my-5 text-2xl underline ">
      Booked Service
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Service Price</th>
              <th>Buyer Name</th>
              <th>My Email</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookData?.map((data) => (
              <tr key={data._id}>
                <td>
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
                <td> $ {data.servicePrice}</td>
                <td>{data.buyerName}</td>
                <td>{data.currentUserEmail}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {" "}
                    <FaRegEdit className="text-2xl"></FaRegEdit>{" "}
                  </button>
                  <button onClick={() => handleDelete(data._id)} className="">
                    {" "}
                    <FiXCircle className="text-2xl"> </FiXCircle>{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookService;
