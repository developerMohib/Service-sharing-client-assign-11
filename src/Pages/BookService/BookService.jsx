import { useContext, useEffect, useState } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BookService = () => {
  const [bookData, setBookData] = useState([]);
  const { user, loading } = useContext(AuthCustomContext);
  console.log(bookData , 'book data ')

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

  return (
    <div>
      <Helmet> <title> My Booked | Simple service sharing web application </title> </Helmet>
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
              <th>Status</th>
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
                  <p> {data.status} </p>
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
