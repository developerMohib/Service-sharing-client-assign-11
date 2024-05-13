import { useContext, useEffect, useState } from "react";
import { AuthCustomContext } from "../../Provider/Provider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RelaventShow from "../../Component/RelaventShow/RelaventShow";

const BookService = () => {
  const [bookData, setBookData] = useState([]);
  const { user, loading } = useContext(AuthCustomContext);
  // console.log(bookData , 'book data ')

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
    // return <p> loading......  </p> ;
    return <span className="loading loading-ring loading-lg"></span>  ;
  }
  if(bookData.length <= 0){
    return <RelaventShow> </RelaventShow>
  }

  return (
    <div>
      <Helmet> <title> My Booked | Simple service sharing web application </title> </Helmet>
      <div data-aos="fade-right" data-aos-duration="3000"   className="text-sm breadcrumbs ">
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
      <h1 data-aos="fade-down" data-aos-duration="3000"   className="text-center font-bold my-5 text-2xl underline ">
      Booked Service
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead data-aos="fade-down" data-aos-duration="3000"  >
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
                <td data-aos="fade-right" data-aos-duration="3000"  >
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
                <td data-aos="zoom-in" data-aos-duration="3000"  > $ {data.servicePrice}</td>
                <td data-aos="zoom-in" data-aos-duration="3000"  >{data.buyerName}</td>
                <td data-aos="zoom-in" data-aos-duration="3000"  >{data.currentUserEmail}</td>
                <th data-aos="fade-left" data-aos-duration="3000"  >
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
