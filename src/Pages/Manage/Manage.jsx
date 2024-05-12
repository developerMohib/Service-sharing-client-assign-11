import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthCustomContext } from "../../Provider/Provider";

const Manage = () => {
    const {user } = useContext(AuthCustomContext);
    const email = user?.email ;
    
    const allData = useLoaderData() ;
    // console.log(allData)
    const findData = allData.find(data => data.providerEmail == email ) ;
    console.log(findData, 'manage data')
    const {providerEmail,providerName,serviceName,serviceImage} = findData
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Provider Name</th>
              <th>Provider Email</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={serviceImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{serviceName}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
               {providerName}
              </td>
              <td>{providerEmail}</td>
              <th>
                <button className="btn btn-ghost btn-xs">X</button>
                <button className="btn btn-ghost btn-xs">ok</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
