import { useContext, useEffect, useState } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import { FaRegEdit } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Manage = () => {
  const [bookData, setBookData] = useState([]);
  
  const { user, loading } = useContext(AuthCustomContext);
  const userEmail = user?.email;
  
  const myAddData = bookData.filter((data) => data.providerEmail == userEmail);
  // console.log(myAddData, "user email");

  const getData = () => {
    // to do : which data she / he added
    fetch(`http://localhost:5000/eduServices`)
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  };
  useEffect(() => {
    getData();
  }, [userEmail]);


  if (loading) {
    return <p> loading...... </p>;
  }

  const handleDelete = (id) => {
 console.log(id)
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
        axios.delete(
          `http://localhost:5000/eduServices/${id}`
        )
        .then(data => {
          if(data.data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        })
        getData();
      }
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const serviceArea = e.target.serviceArea.value;
    const serviceImage = e.target.serviceUrl.value;
    const serviceName = e.target.serviceName.value;
    const servicePrice = e.target.servicePrice.value;
    const updateDoc = { serviceArea, serviceImage, serviceName, servicePrice };

    // data fetch to update
    fetch(`http://localhost:5000/eduServices`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateDoc),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Update successful");
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>
      <Helmet> <title>Manage | Simple service sharing web application </title> </Helmet>
      <div className="text-sm breadcrumbs ">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/addService"> Add Service </Link>
          </li>
          <li>
            <Link> Manage Service </Link>
          </li>
        </ul>
      </div>

      <h1 className="text-center font-bold my-5 text-2xl underline ">
        Manage Service
      </h1>
      <h1 className="text-center font-bold my-5 text-2xl underline ">
        My Post length {myAddData.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Price</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myAddData?.map((data) => (
              <tr key={data._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data.serviceImage}
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
                <td>{data.providerName}</td>
                <td>{data.providerEmail}</td>
                <th>
                  {/* modal start  */}
                  <button
                    className="btn"
                    onClick={() =>{
                      document.getElementById("my_modal_1").showModal()
                    }}
                  >
                    <FaRegEdit className="text-2xl"></FaRegEdit>
                  </button>
                  <dialog id="my_modal_1" className="modal ">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Update Your Data !</h3>
                      <div className="modal-action">
                        <form onSubmit={ () => handleUpdate(data._id) }>
                          <div className="md:flex gap-8 my-5 ">
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">
                                  {" "}
                                  Service Area{" "}
                                </span>
                              </div>
                              <input
                                type="text"
                                placeholder="Service Area"
                                defaultValue={data.serviceArea}
                                name="serviceArea"
                                className="input input-bordered text-opacity-50 w-full"
                              />
                            </label>

                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">
                                  Service Photo URL
                                </span>
                              </div>
                              <input
                                type="text"
                                placeholder="Image URL"
                                defaultValue={data.serviceImage}
                                name="serviceUrl"
                                className="input input-bordered text-opacity-50 w-full"
                              />
                            </label>
                          </div>
                          <div className="md:flex gap-8 my-5 ">
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">
                                  {" "}
                                  Service Name{" "}
                                </span>
                              </div>
                              <input
                                type="text"
                                placeholder="Service Name"
                                defaultValue={data.serviceName}
                                name="serviceName"
                                className="input input-bordered text-opacity-50 w-full"
                              />
                            </label>

                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">
                                  Service Price
                                </span>
                              </div>
                              <input
                                type="text"
                                placeholder="Service Price"
                                defaultValue={data.servicePrice}
                                name="servicePrice"
                                className="input input-bordered text-opacity-50 w-full"
                              />
                            </label>
                          </div>
                          <input
                            className=" btn border-none btn-block my-10 bg-success "
                            type="submit"
                            value="Update Service"
                          />
                        </form>
                      </div>
                    </div>
                  </dialog>
                  {/* modal start  */}
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="ml-2"
                  >
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

export default Manage;
