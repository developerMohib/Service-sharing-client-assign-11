import { useContext } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthCustomContext);
  const providerEmail = user?.email;
  const providerName = user?.displayName;
  const providerPhoto = user?.photoURL;
  const navigate = useNavigate();

  const handleAddService = async (e) => {
    e.preventDefault();
    const from = e.target;
    const serviceImage = from.serviceUrl.value;
    const serviceName = from.serviceName.value;
    const servicePrice = from.price.value;
    const serviceArea = from.serviceArea.value;
    const description = from.description.value;

    const providerData = {
      serviceArea,
      serviceImage,
      serviceName,
      servicePrice,
      description,
      providerEmail,
      providerName,
      providerPhoto,
    };
    console.log(providerData, "formdata");

    // send data to server to database
    try {
      const response = await axios.post(
        "http://localhost:5000/eduServices",
        providerData
      );
      console.log(response.data, "frist try");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You added successfully !",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/manage");
    } catch (err) {
      console.log(err, "frist try catch");
      toast.error(err.message);
    }
  };
  return (
    <div className="my-10">
      <Helmet> <title> Add Service | Simple service sharing web application </title> </Helmet>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link> Add Service </Link>
          </li>
        </ul>
      </div>
      <h1 className="text-center font-bold my-5 text-2xl underline ">
        Add a Services
      </h1>
      <div className=" p-10 ">
        <form onSubmit={handleAddService}>
          {/* form Category and details row */}
          <div className="md:flex gap-8 my-5 ">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Provider Name</span>
              </div>
              <input
                type="text"
                defaultValue={providerName}
                readOnly
                name="name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text"> Provider Email </span>
              </div>
              <input
                type="email"
                defaultValue={providerEmail}
                readOnly
                name="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form name and price row */}
          <div className="md:flex gap-8 my-5 ">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text"> Service Name </span>
              </div>
              <input
                type="text"
                placeholder="Service Name"
                name="serviceName"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text"> Price </span>
              </div>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form service area and photo url row */}
          <div className="md:flex gap-8 my-5 ">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text"> Service Area </span>
              </div>
              <input
                type="text"
                placeholder="Service Area"
                name="serviceArea"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Service Photo URL</span>
              </div>
              <input
                type="text"
                placeholder="Image URL of the Service "
                name="serviceUrl"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form Details row */}

          <div className="my-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="input input-bordered w-full"
                name="details"
                id="description"
                placeholder="Description"
              ></textarea>
            </label>
          </div>

          <input
            className=" btn border-none btn-block my-10 bg-success "
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
