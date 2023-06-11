import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
// import useMyClasses from "../../../../Hooks/useAllClasses";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [myAllClasses, setMyAllClasses] = useState([]);

  //   const [myAllAddedClasses] = useMyClasses();
  //   console.log(myAllAddedClasses);
  useEffect(() => {
    fetch(`http://localhost:5000/allClasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAllClasses(data);
      });
  }, [user]);
  return (
    <div className="min-h-screen mt-20">
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3 ">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white ">
            Total Class
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {myAllClasses.length} class
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
                        <span>Class Name</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Available Seats
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        # Enrolled Students
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Feedback
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3.5 text-md font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {myAllClasses.map((myClassData, index) => (
                      <tr key={myClassData._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <span>{index + 1}</span>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <span>{myClassData.className}</span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          ${myClassData.price}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {myClassData.availableSeats}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <span>{myClassData.status}</span>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <span>0</span>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className="btn btn-sm btn-white capitalize">
                            {myClassData.feedback
                              ? "Feedback Here"
                              : "No Feedback"}
                          </button>
                        </td>
                        <td className="px-10 py-4 text-sm whitespace-nowrap">
                          <button className="btn btn-sm btn-white">
                            Update
                          </button>
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

export default MyClasses;
