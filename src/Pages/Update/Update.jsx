import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const updateLoaderData = useLoaderData();
  const { id } = useParams();
//   console.log(id, "update and id");

  const { description, serviceArea, serviceImage, serviceName, servicePrice } =
    updateLoaderData;

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update button okay");
    const form = e.target ;
    const upName = form.serviceName.value ;
    const upPrice = form.price.value ;
    const upArea = form.serviceArea.value ;
    const upPhoto = form.serviceUrl.value ;
    const upDescrip = form.details.value ;
    const upData = {upName, upArea, upDescrip,upPhoto, upPrice} ;

    // data fetch to update
    fetch(`http://localhost:5000/eduServices/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'You updated a Spot',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            toast.success("Update successful");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };
  return (
    <div className="my-10">
      <Helmet>
        {" "}
        <title>
          {" "}
          Update Service | Simple service sharing web application{" "}
        </title>{" "}
      </Helmet>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="1000"
        className="text-sm breadcrumbs"
      >
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link> Update Service </Link>
          </li>
        </ul>
      </div>
      <h1
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="1000"
        className="text-center font-bold my-5 text-2xl underline "
      >
        Update Service
      </h1>
      <div className=" p-10 ">
        <form onSubmit={handleUpdate}>
          {/* form name and price row */}
          <div className="md:flex gap-8 my-5 ">
            <label
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="1000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> Service Name </span>
              </div>
              <input
                type="text"
                name="serviceName"
                defaultValue={serviceName}
                className="input input-bordered w-full"
              />
            </label>
            <label
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="1000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> Price </span>
              </div>
              <input
                type="number"
                defaultValue={servicePrice}
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form service area and photo url row */}
          <div className="md:flex gap-8 my-5 ">
            <label
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="1000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text"> Service Area </span>
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
              data-aos-delay="1000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text">Service Photo URL</span>
              </div>
              <input
                type="text"
                defaultValue={serviceImage}
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
              data-aos-delay="2000"
              className="form-control w-full"
            >
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                rows="10"
                cols="50"
                className="input input-bordered w-full"
                name="details"
                id="description"
                defaultValue={description}
              ></textarea>
            </label>
          </div>

          <input
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="1000"
            className=" btn border-none btn-block my-10 bg-success "
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
