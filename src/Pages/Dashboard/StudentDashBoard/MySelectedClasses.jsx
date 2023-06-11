import { FaTrash } from "react-icons/fa";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

import Swal from "sweetalert2";
// import { useQuery } from "react-query";
// import axios from "axios";

const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [mySelectedData, setMySelectedDate] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mySelectedClasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMySelectedDate(data);
      });
  }, [user?.email]);

  //   const { data: mySelectedData = [], refetch } = useQuery(
  //     [user?.email],
  //     async () => {
  //       const res = axios.get(
  //         `http://localhost:5000/mySelectedClasses/${user?.email}`
  //       );
  //       refetch;
  //       return res.data;
  //     }
  //   );

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/selectedClasses/${id}`, {
      method: "DELETE",
    }).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Deleted",
        showConfirmButton: false,
        timer: 1500,
      });

      const remainingData = mySelectedData.filter((data) => data._id !== id);
      setMySelectedDate(remainingData);
    });
  };

  return (
    <div className="min-h-screen mt-20">
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3 ">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white ">
            Total Class
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            0 class
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>#</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Class Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Instructor</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Instructor Email
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Price
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Make Payment
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Delete Class
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {mySelectedData.map((myData, index) => (
                      <tr key={myData._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <span>{index + 1}</span>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <span>{myData.className}</span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {myData.instructor}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {myData.email}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <span>${myData.price}</span>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className="btn btn-sm btn-neutral">
                            Pay Now
                          </button>
                        </td>
                        <td className="px-10 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                              onClick={() => handleDelete(myData._id)}
                            >
                              <FaTrash></FaTrash>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySelectedClasses;
