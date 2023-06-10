import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import Swal from "sweetalert2";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  console.log(users);
  const handleRole = async (user, role) => {
    try {
      const response = await axiosSecure.patch(`/users/admin/${user._id}`, {
        role,
      });
      console.log(response.data);

      if (response.data.modifiedCount) {
        refetch();
        if (role === "Admin") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `WOW! ${user.name}, You are now an Admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `WOW! ${user.name}, You are now an Instructor!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div>
        <section className="container px-4 mx-auto mt-20">
          <div className="flex items-center gap-x-3 justify-center">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Team members
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              100 users
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
                          className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <span>#</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Photo
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Email address
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Role</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Make Admin
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Make Instructor
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {users.map((user, index) => (
                        <tr key={user._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <span>{index + 1}</span>
                          </td>
                          <td>
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={user.photoUrl}
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <h2 className="font-medium text-gray-800 dark:text-white ">
                              {user.name}
                            </h2>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {user.email}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {user.role}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button
                              onClick={() => {
                                handleRole(user, "Admin");
                              }}
                              className={`px-3 py-1 text-xs rounded-full ${
                                user.role === "Instructor" ||
                                user.role === "Admin"
                                  ? "bg-gray-200 text-gray-600"
                                  : "text-indigo-500 dark:bg-gray-800 bg-indigo-100/60"
                              }`}
                              disabled={
                                user.role === "Instructor" ||
                                user.role === "Admin"
                              }
                            >
                              Admin
                            </button>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap ">
                            <button
                              onClick={() => {
                                handleRole(user, "Instructor");
                              }}
                              className={`px-3 py-1 text-xs rounded-full ${
                                user.role === "Instructor" ||
                                user.role === "Admin"
                                  ? "bg-gray-200 text-gray-600"
                                  : "text-indigo-500 dark:bg-gray-800 bg-indigo-100/60"
                              }`}
                              disabled={
                                user.role === "Instructor" ||
                                user.role === "Admin"
                              }
                            >
                              Instructor
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
    </div>
  );
};

export default ManageUsers;
