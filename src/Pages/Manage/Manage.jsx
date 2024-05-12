import { useContext, useEffect, useState } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import { FaRegEdit } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "axios";

const Manage = () => {
  const [bookData, setBookData] = useState([]);
  const { user, loading } = useContext(AuthCustomContext);

  useEffect(() => {
    getData();
  }, [user?.email]);


  const getData = () => {
    fetch(`http://localhost:5000/bookedServices/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  };


  if (loading) {
    return <p> loading...... </p>;
  }

  const handleDelete = async (id) => {
    console.log(id);
    try{
      const data = await axios.delete(`http://localhost:5000/bookedServices/${id}`)
      console.log(data);
      toast.success('delete successful');
      getData();
    }
    catch{err=>{
      toast.error(err.message)
    }}
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
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

export default Manage;
