import { Link } from "react-router-dom";
import useMyEnrolledClasses from "../../../Hooks/useMyEnrolledClasses";

const MyEnrolledClasses = () => {
  const [MyEnrolledClasses] = useMyEnrolledClasses();

  return (
    <div className="min-h-screen mt-20">
      <section className="container px-4 mx-auto">
        <div className="flex justify-between gap-x-3 ">
          <div className="flex items-center gap-x-3 ">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white ">
              Total Class Purchase
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {MyEnrolledClasses.length} class
            </span>
          </div>
          <div>
            <Link to="/purchase-history">
              <button className="btn btn-neutral">See Purchase History</button>
            </Link>
          </div>
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
                        Purchase price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {MyEnrolledClasses.map((myData, index) => (
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

export default MyEnrolledClasses;
