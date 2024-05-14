import { useContext, useState } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const BookNow = () => {
  const { user } = useContext(AuthCustomContext);
  const currentUserEmail = user?.email;
  const currentUserName = user?.displayName;
  const loadData = useLoaderData();
  const forDisble = loadData.providerEmail;
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const {
    serviceImage,
    serviceName,
    description,
    providerName,
    providerEmail,
    servicePrice,
    serviceArea,
    _id,
  } = loadData;

  const handleBooked = async (e) => {
    e.preventDefault();
    const from = e.target;
    const buyerName = from.buyerName.value;
    const buyerEmail = from.buyerEmail.value;
    const serviceId = from.id.value;
    const serviceName = from.serviceName.value;
    const servicePrice = from.servicePrice.value;
    const serviceArea = from.serviceArea.value;
    const serviceUrl = from.serviceUrl.value;
    const deadline = startDate;
    const status = "pending";
    const bookedData = {
      buyerName,
      buyerEmail,
      serviceId,
      serviceName,
      servicePrice,
      serviceArea,
      serviceUrl,
      currentUserEmail,
      currentUserName,
      deadline,
      status,
    };
    // send data to server to database
    try {
      const response = await axios.post(
        "http://localhost:5000/bookedServices",
        bookedData
      );
      console.log(response.data, "frist try");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You purchase successfully !",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/booked");
    } catch (err) {
      console.log(err, "frist try catch");
      toast.error(err.message);
    }
  };

  return (
    <div className="my-10">
      <Helmet>
        {" "}
        <title> Book Now | Simple service sharing web application </title>{" "}
      </Helmet>
      <h1
        data-aos="fade-down"
        data-aos-duration="2000"
        className="text-center font-bold my-5 text-2xl underline "
      >
        Book Now
      </h1>
      <div className=" p-10 ">
        <form onSubmit={handleBooked}>
          {/* form Provider email and name row */}
          <div className="md:flex gap-8 my-5 ">
            <label
              data-aos="fade-right"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text">Provider Name</span>
              </div>
              <input
                type="text"
                defaultValue={providerName}
                readOnly
                name="buyerName"
                className="input input-bordered w-full"
              />
            </label>
            <label
              data-aos="fade-left"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> Provider Email </span>
              </div>
              <input
                type="email"
                defaultValue={providerEmail}
                readOnly
                name="buyerEmail"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form Current User email and name row */}
          <div className="md:flex gap-8 my-5 ">
            <label
              data-aos="fade-right"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <input
                type="text"
                defaultValue={currentUserName}
                readOnly
                name="currentUserName"
                className="input input-bordered w-full"
              />
            </label>
            <label
              data-aos="fade-left"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> User Email </span>
              </div>
              <input
                type="email"
                defaultValue={currentUserEmail}
                readOnly
                name="currentUserEmail"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form Date and serviceId row */}
          <div className="md:flex gap-8 my-5 ">
            <label
              data-aos="fade-right"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text">Date</span>
              </div>
              <DatePicker
                className="input input-bordered w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </label>
            <label
              data-aos="fade-left"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> Service Id </span>
              </div>
              <input
                type="text"
                defaultValue={_id}
                name="id"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form name and price row */}
          <div className="md:flex gap-8 my-5 ">
            <label
              data-aos="fade-right"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> Service Name </span>
              </div>
              <input
                type="text"
                defaultValue={serviceName}
                readOnly
                name="serviceName"
                className="input input-bordered w-full"
              />
            </label>
            <label
              data-aos="fade-left"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> Price </span>
              </div>
              <input
                type="number"
                defaultValue={servicePrice}
                readOnly
                name="servicePrice"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form service area and photo url row */}
          <div className="md:flex gap-8 my-5 ">
            <label
              data-aos="fade-right"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> Service Area (You can change it) </span>
              </div>
              <input
                type="text"
                defaultValue={serviceArea}
                name="serviceArea"
                className="input input-bordered w-full"
              />
            </label>
            <label
              data-aos="fade-left"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text">Service Photo URL</span>
              </div>
              <input
                type="text"
                defaultValue={serviceImage}
                readOnly
                name="serviceUrl"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form Details row */}

          <div className="my-5">
            <label
              data-aos="fade-up"
              data-aos-duration="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="input input-bordered w-full"
                name="details"
                id="description"
                defaultValue={description}
                readOnly
              ></textarea>
            </label>
          </div>

          <input
            disabled={forDisble === currentUserEmail}
            title={
              forDisble === currentUserEmail ? "You can't able to purchase your own post " : ""
            }
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" btn border-none btn-block my-10 bg-success "
            type="submit"
            value="Purchase Now "
          />
        </form>
      </div>
      {/* <Tooltip/>  */}
    </div>
  );
};

export default BookNow;
