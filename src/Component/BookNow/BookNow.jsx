import { useContext } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import { useLoaderData } from "react-router-dom";

const BookNow = () => {
    const {user} = useContext(AuthCustomContext);
    const providerEmail = user?.email ;
    const providerName = user?.displayName ;
    const providerPhoto = user?.photoURL ;
    console.log(providerPhoto);
    const loadData = useLoaderData() ;
    const {ice_image, service_name, service_description, service_provider, service_price} = loadData ;

    return (
        <div className="my-10" >
        <h1 className="text-center font-bold my-5 text-2xl underline ">Add a Services</h1>
        <div className=" p-10 " >
          <form >
              
              {/* form Category and details row */}
            <div className="md:flex gap-8 my-5 " >
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
            <div className="md:flex gap-8 my-5 " >
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
            <div className="md:flex gap-8 my-5 " >
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
  
            <div className="my-5" >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea className="input input-bordered w-full" name="details" id="description" placeholder="Description" ></textarea>
            </label>
            </div>
  
            <input className=" btn border-none btn-block my-10 bg-success " type="submit" value="Add Service" />
          </form>
        </div>
      </div>
    );
};

export default BookNow;